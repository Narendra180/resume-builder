import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from "react";
import Course from "../course/course";
import { connect } from "react-redux";
import { setEducationSection } from '../../redux/education/educationaction';
import SaveAddBtnsContiner from '../save-add-card-con/save-add-card-con';
import "./educationsection.css";

function EducationSection({ setEducationSection, style }) {

    const btnRefsArray = useRef([]);
    const educationData = useRef([]);
    let updatedCoursesArray = useRef([]);

    useEffect(() => {
        updatedCoursesArray.current = coursesArray;
    })

    const storeBtnRefs = (ele) => {
        if(ele) {
            let id = ele.parentElement.dataset.id;
            let tempObj = {[id] : ele};
            btnRefsArray.current.push(tempObj);            
        }
    }

    const addData = ({id: i, state: s}) => {

        let index = educationData.current.findIndex((obj) => {
            return obj.hasOwnProperty(i);
        });

        if(index === -1) {
            let tempObj = {[i]: s};
            educationData.current.push(tempObj);
        } else {
            educationData.current[index][i] = s;
        }
        
    }

    const handleDeleteCourse = (recievedId) => {
        if(updatedCoursesArray.current.length > 1) {
            let index = educationData.current.findIndex((obj) => {
                return obj.hasOwnProperty(recievedId);
            });
    
            if(index > -1)  {
                educationData.current.splice(index, 1);
            }
    
            btnRefsArray.current.find((obj,i) => {
                if(obj.hasOwnProperty(recievedId)) {
                    btnRefsArray.current.splice(i,1);
                }
                return obj.hasOwnProperty(recievedId);
            });
    
            setCoursesArray(
                updatedCoursesArray.current.filter((course) => {
                    return course.props.id !== recievedId; 
                })
            );
        }
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

        btnRefsArray.current.forEach((obj) => {
            for(let key in obj)  {
                obj[key].click();
            }
        });

        // we have to return new array every time or else component won't re-render
        if(educationData.current.length) {
            setEducationSection([...educationData.current]);
        }
    }

    return (
        <div style={style}>
            <div
                className='cards-list'
            >
                {coursesArray}            
            </div>

            <SaveAddBtnsContiner 
                saveOnClick={handleSavingThisSection}
                addCardOnClick={handleAddCourse}
                saveBtnContent="Save Education Section"
                addBtnContent="Add Course"
            /> 
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEducationSection: educationData => {
            dispatch(setEducationSection(educationData))
        }
    }
}

export default connect(null, mapDispatchToProps)(EducationSection);