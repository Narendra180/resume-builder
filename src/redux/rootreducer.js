import { combineReducers } from 'redux';

import ProfileReducer from './profile/profilereducer';
import EducationReducer from './education/educationreducer';
import SkillsReducer from './skills/skillreducer';
import MiniProjectReducer from "./miniproject/miniprojectreducer";
import SocialMentionReducer from './socialmention/socialmentionreducer';

export default combineReducers({
    profileSection: ProfileReducer,
    educationSection: EducationReducer,
    skilsSection: SkillsReducer,
    miniProjectSection: MiniProjectReducer,
    socialMentionSection: SocialMentionReducer
})