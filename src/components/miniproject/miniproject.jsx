import { useState, forwardRef } from "react";
import Button from "../btn/btn";
import CustomInput from "../custominput/custom-input";

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
            <div className="mini-project-form card">
                <form 
                    onSubmit={handleSubmit}
                    onKeyPress={(event) => {
                        return event.key === "Enter" && event.preventDefault();
                    }}
                    data-id = {id}
                >
                    <CustomInput
                        label={"Project Name"}
                        name="projectname"
                        value={state.projectname}
                        onChange={handleChange}
                        type="text"
                    />

                    <CustomInput
                        label={"Tech Stack Used"}
                        name="techstackused"
                        value={state.techstackused}
                        onChange={handleChange}
                        type="text"
                        component={"TA"}
                    />

                    <CustomInput
                        label={"Project Description"}
                        name="projectdescription"
                        value={state.projectdescription}
                        onChange={handleChange}
                        type="text"
                        component={"TA"}
                    />

                    <Button 
                        className="delete-btn"
                        btnContent="Delete"
                        type="button"
                        onClick={() => deleteMiniProject(id)}
                    />

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