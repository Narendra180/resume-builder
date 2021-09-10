const INITIAL_STATE = {
    skillsData: []
}

const SkillsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_SKILLS_SECTION":
            return {
                ...state,
                skillsData: action.payload
            }
        default: 
            return state;
    }
}

export default SkillsReducer;