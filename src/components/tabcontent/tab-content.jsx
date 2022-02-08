import ProfileSection from "../profilesection/ProfileSection";
import EducationSection from "../educationsection/educationsection";
import SkillSection from "../skillssection/SkillsSection";
import MiniProjectSection from "../miniprojectsection/miniprojectsection";
import SocialMentionSection from "../socialmentionsection/socialmentionsection";

function TabContent({ activeTab }) {
    // console.log(props.children)

    return (
        <div className="tab-content">
            <ProfileSection 
                style={activeTab === 0?{}:{display:"none"}}
            />
            <EducationSection 
                style={activeTab === 1?{}:{display:"none"}}
            />                
            <SkillSection 
                style={activeTab === 2?{}:{display:"none"}}
            />
            <MiniProjectSection 
                style={activeTab === 3?{}:{display:"none"}}                
            />
        
            <SocialMentionSection 
                style={activeTab === 4?{}:{display:"none"}}                
            />
        </div>
    );
}

export default TabContent;