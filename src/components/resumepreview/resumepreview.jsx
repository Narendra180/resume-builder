import { useState } from 'react'; 
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Modal from '../resumepreviewmodal/modal';
import './resumepreview.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/
${pdfjs.version}/pdf.worker.min.js`;

function ResumePreviewModal({generatedPdf, setDisplayResumePreviewModal}) {

    const [numPages, setNumPages] = useState(null);
    // const [pageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <Modal
            closeHandler={setDisplayResumePreviewModal}
        >
            <div className="resume-preview"
                onClick={(event) => event.stopPropagation()}
            >
                <div
                    className="resume-preview-header"
                >
                    <h1>Resume Preview</h1>
                    <button
                        className='close-btn'
                        onClick={setDisplayResumePreviewModal}
                    >
                        &#10005;
                    </button>
                </div>

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
                    {/* <p>Page {pageNumber} of {numPages}</p> */}
                </div>
            </div>
        </Modal>
    );
}

export default ResumePreviewModal;