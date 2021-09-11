import { useState, forwardRef } from "react";
import FormInput from "../forminput/form-input";

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
        <div className="course-from-div">
            <form id="course-form" onSubmit={handleSubmit}
                onKeyPress={(e) => { 
                    e.key==="Enter" && e.preventDefault();
                }}
            >
                <FormInput
                    label={"Name of Course: "}
                    id="nameofcourse" 
                    name="nameofcourse"
                    value={state.nameofcourse}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <FormInput
                    label={"Course Completion Year: "}
                    id="coursecompletionyear" 
                    name="coursecompletionyear"
                    value={state.coursecompletionyear}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <FormInput
                    label={"College/School Name : "}
                    id="collegeschoolname" 
                    name="collegeschoolname"
                    value={state.collegeschoolname}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <FormInput
                    label={"Percentage: "}
                    id="percentage" 
                    name="percentage"
                    value={state.percentage}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <button
                    type="button"
                    onClick={() => props.deleteCourse(props.id)}
                >
                    &#10005;
                </button>

                <button 
                    style={{display: "none"}}
                    ref={ref}
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