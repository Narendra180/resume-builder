import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from "react";
import Course from "../course/course";
import { connect } from "react-redux";
import { setEducationSection } from '../../redux/education/educationaction';

function EducationSection({ setEducationSection }) {

    const refArray = useRef([]);
    const educationData = useRef([]);
    let id = useRef(0);
    let updatedCoursesArray = useRef([]);

    useEffect(() => {
        updatedCoursesArray.current = coursesArray;
    })

    const addRefToRefArray = (ele) => {
        if(ele && !refArray.current.includes(ele)) {
            refArray.current.push(ele);
            // console.log(ele,"in if")
        }
    }

    const addData = ({id: i, state: s}) => {
        educationData.current[i] = s;
        console.log(educationData)
    }

    const handleDeleteCourse = (recievedId) => {
        id.current -= 1;
        // if(id >= 1) {
        setCoursesArray(updatedCoursesArray.current.filter((ele,i) => i!==recievedId));
            // educationData.current.pop(id);
        // }
    }

    const [coursesArray,setCoursesArray] = useState(
        [
            <Course 
                key={uuidv4()} 
                id={id.current}
                ref={addRefToRefArray} 
                addData={addData}
                deleteCourse={handleDeleteCourse}
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
                    deleteCourse={handleDeleteCourse}
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

        setEducationSection(educationData.current);

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