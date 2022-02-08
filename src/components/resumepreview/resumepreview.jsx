import { useState } from 'react'; 
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './resumepreview.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/
${pdfjs.version}/pdf.worker.min.js`;

function ResumePreviewModal({generatedPdf, setDisplayResumePreviewModal}) {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <div className="resume-preview">
            <header>
                <h1>Resume Preview</h1>
                <button
                    onClick={setDisplayResumePreviewModal}
                >
                    &#10005;
                </button>
            </header>

            <div  className="resume-preview-content">
                <Document
                    file={generatedPdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {/* <Page pageNumber={pageNumber} /> */}
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
            
        </div>
    );
}

export default ResumePreviewModal;