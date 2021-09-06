import { combineReducers } from 'redux';

import ProfileReducer from './profile/profilereducer';

export default combineReducers({
    profileSection: ProfileReducer
})