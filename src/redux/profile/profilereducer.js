const INITIAL_STATE = {
    profileData: {
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        profilePicture: ""
    }
}

const ProfileReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_PROFILE_SECTION":
            return {
                ...state,
                profileData: action.payload
            };
        default:
            return state;
    }
};

export default ProfileReducer;