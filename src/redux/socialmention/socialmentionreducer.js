const INITIAL_STATE = {
    socialMentionData : []
}

const SocialMentionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_SOCIAL_MENTION_SECTION":
            return {
                ...state,
                socialMentionData: action.payload 
            };

        default:
            return state;
    }
}

export default SocialMentionReducer;