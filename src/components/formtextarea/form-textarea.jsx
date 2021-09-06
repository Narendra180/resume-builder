export default function FormTextarea({label, id, ...otherprops}) {
    return (
        <div className="form-group">
            {
                label
                ?
                (
                <label htmlFor={id}>
                    {label}
                </label>
                )
                :
                null
            }
            <textarea
                id={id} 
                {...otherprops}
            />
        </div>
        
    )
}