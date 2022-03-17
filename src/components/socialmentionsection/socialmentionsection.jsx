import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect } from "react";
import SocialMention from '../socialmention/socialmention';
import { connect } from 'react-redux';
import { setSocialMentionSection } from '../../redux/socialmention/socialmentionaction';
import SaveAddBtnsContiner from '../save-add-card-con/save-add-card-con';

function SocialMentionSection({setSocialMentionSection,style}) {

    const btnRefsArray = useRef([]);
    const socialMentionData = useRef([]);
    let updatedSocialMentionArray = useRef([]);

    useEffect(() => {
        updatedSocialMentionArray.current = socialMentionArray;
    });

    
    const addData = ({id: i, state: s}) => {
        let index = socialMentionData.current.findIndex((obj) => {
            return obj.hasOwnProperty(i);
        });

        if(index === -1) {
            let tempObj = {[i]: s};
            socialMentionData.current.push(tempObj);
        } else {
            socialMentionData.current[index][i] = s;
        }
    }

    const storeBtnRefs = (ele) => {
        if(ele) {
            let id = ele.parentElement.dataset.id;
            let tempObj = {[id] : ele};
            btnRefsArray.current.push(tempObj);            
        }
    }

    const handleDeleteSocialMention = (recievedId) => {
        if(updatedSocialMentionArray.current.length > 1) {
            let index = socialMentionData.current.findIndex((obj) => {
                return obj.hasOwnProperty(recievedId);
            });
    
            if(index > -1)  {
                socialMentionData.current.splice(index, 1);
            }
    
            btnRefsArray.current.find((obj,i) => {
                if(obj.hasOwnProperty(recievedId)) {
                    btnRefsArray.current.splice(i,1);
                }
                return obj.hasOwnProperty(recievedId);
            });
    
            setSocialMentionArray(
                updatedSocialMentionArray.current.filter((socialMention) => {
                    return socialMention.props.id !== recievedId; 
                })
            );
        }
    }

    const [socialMentionArray,setSocialMentionArray] = useState(
        [
            <SocialMention 
                key={uuidv4()}
                addData={addData}
                id={uuidv4()}
                ref={storeBtnRefs}
                deleteSocialMention={handleDeleteSocialMention}
            />
        ]
    );

    const handleAddSocialMention = () => {
        setSocialMentionArray(
            socialMentionArray.concat(
                <SocialMention 
                    key={uuidv4()}
                    addData={addData}
                    id={uuidv4()}
                    ref={storeBtnRefs}
                    deleteSocialMention={handleDeleteSocialMention}
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
        setSocialMentionSection([...socialMentionData.current]);
    }

    return (
        <div style={style}>
            <div
                className='cards-list'
            >
                {socialMentionArray}
            </div>

            <SaveAddBtnsContiner 
                saveOnClick={handleSavingThisSection}
                addCardOnClick={handleAddSocialMention}
                saveBtnContent="Save Social Section"
                addBtnContent="Add Social Mention"
            /> 
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSocialMentionSection: (data) => dispatch(setSocialMentionSection(data))
    }
}

export default connect(null, mapDispatchToProps)(SocialMentionSection);