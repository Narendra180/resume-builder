const INITIAL_STATE = {
    profileSection: {}
}

const ProfileReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_PROFILE_SECTION":
            return {
                ...state,
                profileSection: action.payload
            };
        default:
            return state;
    }
};

export default ProfileReducer;