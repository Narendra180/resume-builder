import { useState, forwardRef } from "react";
import CustomInput from "../custominput/custom-input";
import Button from "../btn/btn";
import './course.css';

const Course = forwardRef((props, ref) => {

    const [state,setState] = useState({
        nameofcourse: "",
        coursecompletionyear: "",
        collegeschoolname: "",
        percentage: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addData({id: props.id, state: state});
        // console.log("Submitted");
    }

    return (
        <div className="course-from-div card">
            <form id="course-form" 
                onKeyPress={(e) => { 
                    e.key==="Enter" && e.preventDefault();
                }}
                onSubmit={handleSubmit}
                data-id = {props.id}
            >
                <CustomInput
                    label={"Name of Course"}
                    name="nameofcourse"
                    value={state.nameofcourse}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <CustomInput
                    label={"Course Completion Year"}
                    name="coursecompletionyear"
                    value={state.coursecompletionyear}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <CustomInput
                    label={"College/School Name "}
                    name="collegeschoolname"
                    value={state.collegeschoolname}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <CustomInput
                    label={"Percentage"}
                    name="percentage"
                    value={state.percentage}
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
                    type="submit"
                >
                    submit
                </button>
            </form>

            {/* <button onClick={handlebtn} type="submit" form="course-form">
                submit
            </button> */}
            
        </div>
    )
});

export default Course;