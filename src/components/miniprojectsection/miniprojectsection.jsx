import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from "react";
import MiniProject from '../miniproject/miniproject';
import { setMiniProjectSection } from '../../redux/miniproject/miniprojectaction';
import { connect } from 'react-redux';

function MiniProjectSection({ setMiniProjectSection }) {

    let buttonRefsArray = useRef([]);
    const miniProjectData = useRef([]);

    const addRefToArray = (ele) => {
        if(ele && !buttonRefsArray.current.includes(ele)) {
            buttonRefsArray.current.push(ele);
        }
    }

    const addData = ({id: i, state: s}) => {
        miniProjectData.current[i] = s;
        console.log(miniProjectData.current)
    }

    let id = useRef(0);

    const [miniProjectsArray,setMiniProjectsArray] = useState(
        [
            <MiniProject 
                key={uuidv4()}
                addData={addData}
                id={id.current}
                ref={addRefToArray}
            />
        ]
    );

    const handleAddProject = () => {
        id.current += 1;
        setMiniProjectsArray(
            miniProjectsArray.concat(
                <MiniProject 
                    key={uuidv4()}
                    addData={addData}
                    id={id.current}
                    ref={addRefToArray}
                />
            )
        );
    }

    const handleSavingThisSection = () => {
        buttonRefsArray.current.forEach(btn => {
            btn.click();
        })
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