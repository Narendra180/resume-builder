import './custom-file-upload-btn.css';

function CustomFileUploadBtn({id,btnText,warning, ...otherProps}) {
    return (
        <div
            className="custom-file-upload-btn-con-prent-div"
        >
            <div>
                <div
                    className="custom-file-upload-btn-con"
                    id={id?id:"cfubc"}
                >
                    <label
                        className="upload-btn-label"
                    >
                        {btnText?btnText:"Choose File"}
                        <input
                            className="input-file" 
                            type="file"
                            {...otherProps}
                        />
                    </label>
                </div>      

                
            </div>

            {
                warning
                ?
                <div className="warning-msg">{warning}</div>
                :
                ""
            }
        </div>
    );
}

export default CustomFileUploadBtn;