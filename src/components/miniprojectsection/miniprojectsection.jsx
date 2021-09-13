import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from "react";
import MiniProject from '../miniproject/miniproject';
import { setMiniProjectSection } from '../../redux/miniproject/miniprojectaction';
import { connect } from 'react-redux';

function MiniProjectSection({ setMiniProjectSection }) {

    let btnRefsArray = useRef([]);
    const miniProjectData = useRef([]);

    let updatedMiniProjectsArray = useRef([]);

    useEffect(() => {
        updatedMiniProjectsArray.current = miniProjectsArray;
    })

    const storeBtnRefs = (ele) => {
        if(ele) {
            let id = ele.parentElement.dataset.id;
            let tempObj = {[id] : ele};
            btnRefsArray.current.push(tempObj);            
        }
    }

    const addData = ({id: i, state: s}) => {

        let index = miniProjectData.current.findIndex((obj) => {
            return obj.hasOwnProperty(i);
        });

        if(index === -1) {
            let tempObj = {[i]: s};
            miniProjectData.current.push(tempObj);
        } else {
            miniProjectData.current[index][i] = s;
        }
        
    }

    const handleDeleteMiniProject = (recievedId) => {
        if(updatedMiniProjectsArray.current.length > 1) {
            let index = miniProjectData.current.findIndex((obj) => {
                return obj.hasOwnProperty(recievedId);
            });
    
            if(index > -1)  {
                miniProjectData.current.splice(index, 1);
            }
    
            btnRefsArray.current.find((obj,i) => {
                if(obj.hasOwnProperty(recievedId)) {
                    btnRefsArray.current.splice(i,1);
                }
                return obj.hasOwnProperty(recievedId);
            });
    
            setMiniProjectsArray(
                updatedMiniProjectsArray.current.filter((miniproject) => {
                    return miniproject.props.id !== recievedId; 
                })
            );
        }
    }

    const [miniProjectsArray,setMiniProjectsArray] = useState(
        [
            <MiniProject 
                key={uuidv4()}
                addData={addData}
                id={uuidv4()}
                ref={storeBtnRefs}
                deleteMiniProject={handleDeleteMiniProject}
            />
        ]
    );

    const handleAddProject = () => {
        setMiniProjectsArray(
            miniProjectsArray.concat(
                <MiniProject 
                    key={uuidv4()}
                    addData={addData}
                    id={uuidv4()}
                    ref={storeBtnRefs}
                    deleteMiniProject={handleDeleteMiniProject}
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
        setMiniProjectSection(miniProjectData.current)
    }

    return (
        <div>
            {miniProjectsArray}
            <button
                onClick={handleSavingThisSection}
            >
                save
            </button>
            <button
                onClick={handleAddProject}
            >
                Add Project
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMiniProjectSection: (data) => dispatch(setMiniProjectSection(data))
    }
}

export default connect(null, mapDispatchToProps)(MiniProjectSection);