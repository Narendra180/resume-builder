import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skill from '../skill/skill';

export default function SkillSection() {
    const [skillsArray,setSkillsArray] = useState([<Skill key={uuidv4()}/>]);

    const handleAddCourse = () => {
        setSkillsArray(skillsArray.concat(<Skill key={uuidv4()}/>));
    }

    return (
        <div>
            {skillsArray}
            <button
                onClick={handleAddCourse}
            >
                Add Skill
            </button>
        </div>
    );
}