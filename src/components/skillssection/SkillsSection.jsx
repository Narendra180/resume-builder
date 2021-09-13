import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skill from '../skill/skill';
import { setSkillsSection } from '../../redux/skills/skillactions';
import { connect } from 'react-redux';

function SkillSection({ setSkillsSection, style }) {

    const btnRefsArray = useRef([]);
    const skillData = useRef([]);
    let updatedSkillsArray = useRef([]);

    useEffect(
        () => {
            updatedSkillsArray.current = skillsArray;
        }
    );

    const storeBtnRefs = (ele) => {
        if(ele) {
            let id = ele.parentElement.dataset.id;
            let tempObj = {[id] : ele};
            btnRefsArray.current.push(tempObj);  
        }
    }

    const addData = ({id: i, state: s}) => {
        let index = skillData.current.findIndex((obj) => {
            return obj.hasOwnProperty(i);
        });

        if(index === -1) {
            let tempObj = {[i]: s};
            skillData.current.push(tempObj);
        } else {
            skillData.current[index][i] = s;
        }
    }

    const handleDeleteSkill = (recievedId) => {
        if(updatedSkillsArray.current.length > 1) {
            let index = skillData.current.findIndex((obj) => {
                return obj.hasOwnProperty(recievedId);
            });
    
            if(index > -1)  {
                skillData.current.splice(index, 1);
            }
    
            btnRefsArray.current.find((obj,i) => {
                if(obj.hasOwnProperty(recievedId)) {
                    btnRefsArray.current.splice(i,1);
                }
                return obj.hasOwnProperty(recievedId);
            });
    
            setSkillsArray(
                updatedSkillsArray.current.filter((skill) => {
                    return skill.props.id !== recievedId; 
                })
            );
        }
    }

    const [skillsArray,setSkillsArray] = useState(
        [
            <Skill 
                key={uuidv4()}
                id={uuidv4()}
                ref={storeBtnRefs}
                addData={addData}
                deleteCourse={handleDeleteSkill}
            />
        ]
    );

    const handleAddSkill = () => {
        setSkillsArray(
            skillsArray.concat(
                <Skill 
                    key={uuidv4()}
                    id={uuidv4()}
                    ref={storeBtnRefs}
                    addData={addData}
                    deleteCourse={handleDeleteSkill}
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
        if(skillData.current.length)
            setSkillsSection([...skillData.current])
    }

    return (
        <div style={style}>
            {skillsArray}

            <button
                onClick={handleSavingThisSection}
            >
                save
            </button>

            <button
                onClick={handleAddSkill}
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