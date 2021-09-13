import { useState, forwardRef } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";

const MiniProject = forwardRef(({addData,id, deleteMiniProject}, ref) => {
        const [state,setState] = useState({
            projectname: "",
            techstackused: "",
            projectdescription: ""
        });

        const handleChange = ({target: {name, value}}) => {
            setState({...state, [name]: value})
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("submitted");
            addData({id, state});
        }

        return (
            <div className="mini-project-form">
                <form 
                    onSubmit={handleSubmit}
                    onKeyPress={(event) => {
                        return event.key === "Enter" && event.preventDefault();
                    }}
                    data-id = {id}
                >
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

                    <button
                    type="button"
                    onClick={() => deleteMiniProject(id)}
                    >
                        &#10005;
                    </button>

                    <button
                        style={
                            {
                                display: "none"
                            }
                        }
                        ref={ref}
                    >   
                        submit
                    </button>
                </form>
            </div>
        )
})  

export default MiniProject;