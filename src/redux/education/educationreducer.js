const INITIAL_STATE = {
    educationData: []
}

const EducationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_EDUCATION_SECTION":
            return {
                ...state,
                educationData: action.payload
            };
        default:
            return state;
    }
};

export default EducationReducer;
