const INITIAL_STATE = {
    miniProjectData: []
}

const MiniProjectReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_MINI_PROJECT_SECTION":
            return {
                ...state,
                miniProjectData: action.payload
            };
        default:
            return state;
    }
}

export default MiniProjectReducer;