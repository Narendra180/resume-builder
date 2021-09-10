import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import Course from "../course/course";
import { connect } from "react-redux";
import { setEducationSection } from '../../redux/education/educationaction';

const educationData = [];

function EducationSection({ setEducationSection }) {

    const refArray = useRef([]);
    let id = useRef(0);
    const addRefToRefArray = (ele) => {
        if(ele && !refArray.current.includes(ele)) {
            refArray.current.push(ele);
            // console.log(ele,"in if")
        }
    }

    const addData = ({id: i, state: s}) => {
        educationData[i] = s;
        console.log(educationData)
    }

    const [coursesArray,setCoursesArray] = useState(
        [
            <Course 
                key={uuidv4()} 
                id={id.current}
                ref={addRefToRefArray} 
                addData={addData}
            />
        ]
    );
    const handleAddCourse = () => {
        id.current += 1;
        setCoursesArray(
            coursesArray.concat(
                <Course 
                    key={uuidv4()} 
                    id={id.current}
                    ref={addRefToRefArray} 
                    addData={addData}
                />
            )
        );
    }

    const handleSavingThisSection = () => {
        // console.log("saving....", clickStatus);
        refArray.current.forEach((buttonRef) => {
                buttonRef.click();
            }
        );

        setEducationSection(educationData);

    }

    return (
        <div>
            {coursesArray}
            <button
                onClick={handleSavingThisSection}
            >
                save
            </button>
            <button
                onClick={handleAddCourse}
            >
                Add Course
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEducationSection: state => dispatch(setEducationSection(state))
    }
}

export default connect(null, mapDispatchToProps)(EducationSection);