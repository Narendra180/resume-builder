import './custom-file-upload-btn.css';

function CustomFileUploadBtn({id, ...otherProps}) {
    return (
        <div
            className="custom-file-upload-btn-con"
            id={id?id:"cfubc"}
        >
            <label
                className="upload-btn-label"
            >
                Choose Profile Picture
                <input 
                    type="file"
                    hidden
                    {...otherProps}
                />
            </label>
        </div>        
    );
}

export default CustomFileUploadBtn;