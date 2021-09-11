import { forwardRef, useState } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";

const SocialMention = forwardRef(({addData,id}, ref) => {
    const [state,setState] = useState({
        nameofsocialmedia: "",
        links: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addData({id,state});
    }

    return (
        <div className="social-mention-form">
            <form
                onSubmit={handleSubmit}
                onKeyPress={
                    (e) => {
                        return e.key === "Enter" && e.preventDefault();
                    }
                }
            >
                <FormInput
                    label={"Name of Social Media: "}
                    id="nameofsocialmedia" 
                    name="nameofsocialmedia"
                    value={state.nameofsocialmedia}
                    onChange={handleChange}
                    type="text"
                />

                <FormTextarea
                    label={"Links: "}
                    id="links" 
                    name="links"
                    value={state.links}
                    onChange={handleChange}
                    type="text"
                />

                <button
                    style={
                        {display: "none"}
                    }
                    ref={ref}
                >
                    submit
                </button>
            </form>
        </div>
    )
}); 

export default SocialMention;