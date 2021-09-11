import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from "react";
import SocialMention from '../socialmention/socialmention';
import { connect } from 'react-redux';
import { setSocialMentionSection } from '../../redux/socialmention/socialmentionaction';

function SocialMentionSection({setSocialMentionSection}) {

    const btnRefsArray = useRef([]);
    const socialMentionData = useRef([]);
    const id = useRef(0);
    
    const addData = ({id: i, state: s}) => {
        socialMentionData.current[i] = s;
        console.log(socialMentionData.current);
    }

    const addRefToBtnRefsArray = (ele) => {
        if(ele && !btnRefsArray.current.includes(ele)) {
            btnRefsArray.current.push(ele);
        }
    }   

    const [socialMentionArray,setSocialMentionArray] = useState(
        [
            <SocialMention 
                key={uuidv4()}
                addData={addData}
                id={id.current}
                ref={addRefToBtnRefsArray}
            />
        ]
    );

    const handleAddSocialMention = () => {
        id.current += 1;
        setSocialMentionArray(
            socialMentionArray.concat(
                <SocialMention 
                    key={uuidv4()}
                    addData={addData}
                    id={id.current}
                    ref={addRefToBtnRefsArray}
                />
            )
        );
    }

    const handleSavingThisSection = () => {
        btnRefsArray.current.forEach(btn => {
            btn.click();
        })

        setSocialMentionSection(socialMentionData.current);
    }

    return (
        <div>
            {socialMentionArray}

            <button onClick={handleSavingThisSection}>
                save
            </button>

            <button
                onClick={handleAddSocialMention}
            >
                Add Social Mention
            </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSocialMentionSection: (data) => dispatch(setSocialMentionSection(data))
    }
}

export default connect(null, mapDispatchToProps)(SocialMentionSection);