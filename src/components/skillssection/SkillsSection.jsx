import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skill from '../skill/skill';
import { setSkillsSection } from '../../redux/skills/skillactions';
import { connect } from 'react-redux';

function SkillSection({ setSkillsSection }) {

    const btnRefsArray = useRef([]);
    const skillData = useRef([]);

    let id = useRef(0);

    const addRefToBtnRefsArray = (ele) => {
        if(ele && !btnRefsArray.current.includes(ele)) {
            btnRefsArray.current.push(ele);
        }
    }

    const addData = ({id: i, state: s}) => {
        skillData.current[i] = s;
        // console.log(skillData)
    }

    const [skillsArray,setSkillsArray] = useState(
        [
            <Skill 
                key={uuidv4()}
                id={id.current}
                ref={addRefToBtnRefsArray}
                addData={addData}
            />
        ]
    );

    const handleAddCourse = () => {
        id.current += 1;
        setSkillsArray(
            skillsArray.concat(
                <Skill 
                    key={uuidv4()}
                    id={id.current}
                    ref={addRefToBtnRefsArray}
                    addData={addData}
                />
            )
        );
    }

    const handleSavingThisSection = () => {
        btnRefsArray.current.forEach(btn => {
            btn.click();
        })

        setSkillsSection(skillData.current)
    }

    return (
        <div>
            {skillsArray}

            <button
                onClick={handleSavingThisSection}
            >
                save
            </button>

            <button
                onClick={handleAddCourse}
            >
                Add Skill
            </button>
        </div>
    );
}

// Here state is data to be sent.
const mapDispatchToProps = (dispatch) => {
    return {
        setSkillsSection: (state) => dispatch(setSkillsSection(state))
    }
}

export default connect(null, mapDispatchToProps)(SkillSection);