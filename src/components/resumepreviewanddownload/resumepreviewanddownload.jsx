import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import jsPDF from 'jspdf';
import { Document, Page } from 'react-pdf';
import './resumepreviewanddownload.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/
${pdfjs.version}/pdf.worker.min.js`;

function ResumePreviewAndDownload() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const [state,setState] = useState(
        {
            displayResumePreviewModal: false,
            generatedPdf: ""
        }
    );



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
                setState({...state, generatedPdf: data, displayResumePreviewModal: true});
            },
            margin: [70,70,80,80]
        });
    
    }


    return (
        <div className="preview-download-buttons">
            <button 
                onClick={handlePreview}
            >
                Resume preview
            </button>

            <button>
                Resume Download
            </button>
            
            <div>
                <Document
                    file={state.generatedPdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                </div>
            </div>  
    );
}

export default ResumePreviewAndDownload;