import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import SocialMention from '../socialmention/socialmention';

export default function MiniProjectSection() {

    const [socialMentionArray,setSocialMentionArray] = useState([<SocialMention key={uuidv4()}/>]);

    const handleAddSocialMention = () => {
        setSocialMentionArray(socialMentionArray.concat(<SocialMention key={uuidv4()}/>));
    }

    return (
        <div>
            {socialMentionArray}
            <button
                onClick={handleAddSocialMention}
            >
                Add Social Mention
            </button>
        </div>
    );
}