import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Course from "../course/course";

export default function EducationSection() {

    const [coursesArray,setCoursesArray] = useState([<Course key={uuidv4()}/>]);

    const handleAddCourse = () => {
        setCoursesArray(coursesArray.concat(<Course key={uuidv4()}/>));
    }

    return (
        <div>
            {coursesArray}
            <button
                onClick={handleAddCourse}
            >
                Add Course
            </button>
        </div>
    );
}