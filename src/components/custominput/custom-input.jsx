import { useState,useEffect,useRef } from "react";
import { newId } from "./label-ids";
import './custom-input.css';

function CustomInput({label,component,warning, ...otherProps}) {
    const [id,setId] = useState(null);

    const customInputContainer = useRef(null);

    useEffect(() => {
        setId(newId());
        // console.log(customInputContainer)
    }, []);

    const handleFocus = () => {
        customInputContainer.current.classList.add("focused");
    }

    const handleBlur = () => {
        customInputContainer.current.classList.remove("focused");
        let ie = document.querySelector("#ci"+id);
        if(ie.value.length > 0) {
            customInputContainer.current.classList.add("value-present");
        } else {
            customInputContainer.current.classList.remove("value-present");
        }
        // console.log(ie.value.length);
    }

    const handleHover = () => {
        customInputContainer.current.classList.add("hovered");
    }

    const handleMouseOut = () => {
        customInputContainer.current.classList.remove("hovered");
    }


    return (
        <div
            className="custom-input-con-parent-div"
        >
            <div
                className={`custom-input-con ${component}`}
                ref={customInputContainer}
            >
                <label 
                    className="ci-label" 
                    htmlFor={"ci"+id}
                >
                    {label?label:"label"}
                </label>

                {
                    component !== "TA"
                    ?
                    <input
                        className="ci-input" 
                        id={"ci"+id}
                        {...otherProps}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseOver={handleHover}
                        onMouseOutCapture={handleMouseOut}
                    />
                    :
                    <textarea 
                        className="ci-input" 
                        id={"ci"+id}
                        {...otherProps}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseOver={handleHover}
                        onMouseOutCapture={handleMouseOut}
                    />
                }

                <fieldset
                    className="ci-fieldset"
                >
                    <legend className="ci-legend">{label?label:"label"}</legend>
                </fieldset>
            </div>
            
            {
                warning
                ?
                <div className="warning-msg">{warning}</div>
                :
                ""
            }
        </div>
        
    )
        
}

export default CustomInput;