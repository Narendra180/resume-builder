import { useState } from "react";
import FormInput from "../forminput/form-input";

export default function Course() {

    const [state,setState] = useState({
        nameofcourse: "",
        coursecompletionyear: "",
        collegeschoolname: "",
        percentage: ""
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}