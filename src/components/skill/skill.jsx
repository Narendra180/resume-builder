import { useState } from "react";
import FormInput from "../forminput/form-input"

export default function Skill() {

    const [state,setState] = useState({
        skill: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    // console.log(state)
    return (
        <div>
            <form>
                <FormInput
                    label={"Skill: "}
                    id="skill" 
                    name="skill"
                    value={state.skill}
                    onChange={handleChange}
                    type="text"
                    required
                />
            </form>
        </div>
    )
}