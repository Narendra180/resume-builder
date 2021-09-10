import { useState, forwardRef } from "react";
import FormInput from "../forminput/form-input"

const Skill = forwardRef((props,ref) => {
    const [state,setState] = useState({
        skill: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addData({id: props.id, state: state});
    }

    
    // console.log(props)
    return (
        <div>
            <form 
                id="skill-form"
                onSubmit={handleSubmit}
                onKeyPress={
                    (event) => event.key === "Enter" && event.preventDefault()
                }
            >
                <FormInput
                    label={"Skill: "}
                    id="skill" 
                    name="skill"
                    value={state.skill}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <button 
                    style={{display: "none"}}
                    ref={ref}
                >
                    submit
                </button>
            </form>
        </div>
    )
});

export default Skill;