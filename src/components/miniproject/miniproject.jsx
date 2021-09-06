import { useState } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";

export default function MiniProject() {

    const [state,setState] = useState({
        projectname: "",
        techstackused: "",
        projectdescription: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    return (
        <div>
            <form>
                <FormInput
                    label={"Project Name: "}
                    id="projectname" 
                    name="projectname"
                    value={state.projectname}
                    onChange={handleChange}
                    type="text"
                />

                <FormTextarea
                    label={"Tech Stack Used: "}
                    id="techstackused" 
                    name="techstackused"
                    value={state.techstackused}
                    onChange={handleChange}
                    type="text"
                />

                <FormTextarea
                    label={"Project Description: "}
                    id="projectdescription" 
                    name="projectdescription"
                    value={state.projectdescription}
                    onChange={handleChange}
                    type="text"
                />
            </form>
        </div>
    )
}