import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import MiniProject from '../miniproject/miniproject';

export default function MiniProjectSection() {

    const [miniProjectsArray,setMiniProjectsArray] = useState([<MiniProject key={uuidv4()}/>]);

    const handleAddProject = () => {
        setMiniProjectsArray(miniProjectsArray.concat(<MiniProject key={uuidv4()}/>));
    }

    return (
        <div>
            {miniProjectsArray}
            <button
                onClick={handleAddProject}
            >
                Add Project
            </button>
        </div>
    );
}