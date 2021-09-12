import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from "react";
import Course from "../course/course";
import { connect } from "react-redux";
import { setEducationSection } from '../../redux/education/educationaction';

function EducationSection({ setEducationSection }) {

    // const refArray = useRef([]);
    const btnRefsObj = useRef({});
    const btnRefsArray = useRef([]);
    const educationData = useRef([]);
    let updatedCoursesArray = useRef([]);

    useEffect(() => {
        updatedCoursesArray.current = coursesArray;
        console.log(btnRefsArray.current);
    })

    // const addRefToRefArray = (ele) => {
    //     // console.log(typeof ele.parentElement.dataset.id);
    //     if(ele && !refArray.current.includes(ele)) {
    //         refArray.current.push(ele);
    //     }
    // }

    const storeBtnRefs = (ele) => {
        // if(ele) {
        //     let id = ele.parentElement.dataset.id;
        //     btnRefsObj.current[id] = ele;
        //     // console.log(btnRefsObj.current);
        // }
        if(ele) {
            let id = ele.parentElement.dataset.id;
            let tempObj = {[id] : ele};
            btnRefsArray.current.push(tempObj);            
        }
    }

    const addData = ({id: i, state: s}) => {
        // educationData.current[i] = s;
        // console.log(educationData);
        
        // if(educationData.current.includes(tempObj)) {
        //     console.log(true);
        // }

        let index = educationData.current.findIndex((obj) => {
            return obj.hasOwnProperty(i);
        });

        if(index === -1) {
            let tempObj = {[i]: s};
            educationData.current.push(tempObj);
        } else {
            educationData.current[index][i] = s;
        }

        // console.log(index);
    }

    const handleDeleteCourse = (recievedId) => {
        // if(updatedCoursesArray.current.length > 1) {
        //     delete educationData.current[recievedId];
        //     delete btnRefsObj.current[recievedId];
        //     // console.log(btnRefsObj.current);
        //     setCoursesArray(
        //         updatedCoursesArray.current.filter((course) => {
        //             return course.props.id !== recievedId; 
        //         })
        //     );
        // }

        // delete educationData.current[recievedId];

        // let removeDataCallBack = (ele,i) => {
        //     if(ele.hasOwnProperty(recievedId)) {
        //         btnRefsArray.current.splice(i,1);
        //     }
        //     return ele.hasOwnProperty(recievedId);
        // }

        let index = educationData.current.findIndex((obj) => {
            return obj.hasOwnProperty(recievedId);
        });

        if(index > -1)  {
            educationData.current.splice(index, 1);
        }

        btnRefsArray.current.find((ele,i) => {
            if(ele.hasOwnProperty(recievedId)) {
                btnRefsArray.current.splice(i,1);
            }
            return ele.hasOwnProperty(recievedId);
        });

        setCoursesArray(
            updatedCoursesArray.current.filter((course) => {
                return course.props.id !== recievedId; 
            })
        );
    }

    const [coursesArray,setCoursesArray] = useState(
        [
            <Course 
                key={uuidv4()} 
                id={uuidv4()}
                ref={storeBtnRefs} 
                addData={addData}
                deleteCourse={handleDeleteCourse}
            />
        ]
    );

    const handleAddCourse = () => {
        setCoursesArray(
            coursesArray.concat(
                <Course 
                    key={uuidv4()} 
                    id={uuidv4()}
                    ref={storeBtnRefs} 
                    addData={addData}
                    deleteCourse={handleDeleteCourse}
                />
            )
        );
    }

    const handleSavingThisSection = () => {
        // console.log("handlesavesection",refArray.current)
        // refArray.current.forEach((buttonRef) => {
        //         buttonRef.click();
        //     }
        // );

        // Object.values(btnRefsObj.current).forEach((buttonRef) => {
        //     buttonRef.click();
        // });

        btnRefsArray.current.forEach((obj) => {
            for(let key in obj)  {
                obj[key].click();
            }
        });

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