export default function FormInput({label, id, ...otherprops}) {
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
            null}
            <input
                id={id} 
                {...otherprops}
            />
        </div>
    )
}