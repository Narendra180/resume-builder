import { useState } from 'react';
import jsPDF from 'jspdf';
import { pdfjs } from 'react-pdf';
import ResumePreviewModal from '../resumepreview/resumepreview';
import './resumepreviewanddownload.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/
${pdfjs.version}/pdf.worker.min.js`;

function ResumePreviewAndDownload() {

    const [state, setState] = useState({
        displayResumePreviewModal: false,
        generatedPdf: ""
    });

    const handlePreview = () => {
        let doc = new jsPDF(
            {
                orientation: 'p',
                unit: 'px',
                format: 'a4',
                hotfixes: ["px_scaling"],
            }
        );
        doc.html(document.querySelector("#resume-div"), {
            callback: function (pdf) {
                let data = pdf.output('dataurlstring');
                setState({...state, displayResumePreviewModal: true, generatedPdf: data});
            },
            margin: [70,70,80,80]
        });

        setState({...state, displayResumePreviewModal: true});
    }

    const setDisplayResumePreviewModal = () => {
        setState({...state, displayResumePreviewModal: false});
    }

    const handleDownload = () => {
        let doc = new jsPDF(
            {
                orientation: 'p',
                unit: 'px',
                format: 'a4',
                hotfixes: ["px_scaling"],
                putOnlyUsedFonts: true,
            },
        );

        doc.html(
            document.querySelector("#resume-div"), 
            {
                callback: function (pdf) {
                    pdf.save("generated");
                },
                margin: [70,70,80,80]
            }
        );
    }

    return (
        <div className="preview-download-buttons">
            <button 
                onClick={handlePreview}
            >
                Resume preview
            </button>

            <button onClick={handleDownload}>
                Download
            </button>
            
            {
                state.displayResumePreviewModal
                ?
                <ResumePreviewModal 
                    generatedPdf={state.generatedPdf}
                    setDisplayResumePreviewModal={setDisplayResumePreviewModal}
                />
                :
                null
            }

        </div>  
    );
}

export default ResumePreviewAndDownload;