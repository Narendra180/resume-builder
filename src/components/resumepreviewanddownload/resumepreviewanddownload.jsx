import { useState } from 'react';
import jsPDF from 'jspdf';
import ResumePreviewModal from '../resumepreview/resumepreview';
import './resumepreviewanddownload.css'

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
            // Adjust your margins here (top, right ,bottom, left)
            margin: [70,70,70,70]
        });

        // setState({...state, displayResumePreviewModal: true});
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
                // Adjust your margins here (top, right ,bottom, left)
                margin: [70,70,70,70]
            }
        );
    }

    return (
        <div className="preview-download">

            <div
                className="preview-download-btns"
            >
                <button 
                    onClick={handlePreview}
                    className="preview-btn btn"
                >
                    Resume preview
                </button>

                <button 
                    onClick={handleDownload}
                    className="download-btn btn"
                >
                    Download
                </button>
            </div>

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