import { combineReducers } from 'redux';

import ProfileReducer from './profile/profilereducer';
import EducationReducer from './education/educationreducer';
import SkillsReducer from './skills/skillreducer';

export default combineReducers({
    profileSection: ProfileReducer,
    educationSection: EducationReducer,
    skilsSection: SkillsReducer

})