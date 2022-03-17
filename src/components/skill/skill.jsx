import { useState, forwardRef } from "react";
import CustomInput from "../custominput/custom-input";
import Button from "../btn/btn";
import "./skill.css";

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
        <div className="card">
            <form 
                id="skill-form"
                onSubmit={handleSubmit}
                onKeyPress={
                    (event) => event.key === "Enter" && event.preventDefault()
                }
                data-id={props.id}
            >
                <CustomInput
                    label={"Skill"}
                    name="skill"
                    value={state.skill}
                    onChange={handleChange}
                    type="text"
                    required
                />
                
                <Button 
                    className="delete-btn"
                    btnContent="Delete"
                    type="button"
                    onClick={() => props.deleteCourse(props.id)}
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