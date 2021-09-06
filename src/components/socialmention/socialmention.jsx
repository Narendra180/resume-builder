import { useState } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";

export default function SocialMention() {

    const [state,setState] = useState({
        nameofsocialmedia: "",
        links: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    // console.log(state)

    return (
        <div>
            <form>
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

                
            </form>
        </div>
    )
}