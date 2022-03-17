import './btn.css';

function Button({className,btnContent, ...otherProps}) {
    return (
        <button 
            className={className + " ----btn"}
            {...otherProps}
        >
            {btnContent}
        </button>
    );
}

export default Button;