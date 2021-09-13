import ProfileSection from "../profilesection/ProfileSection";
import EducationSection from "../educationsection/educationsection";
import SkillSection from "../skillssection/SkillsSection";
import MiniProjectSection from "../miniprojectsection/miniprojectsection";
import SocialMentionSection from "../socialmentionsection/socialmentionsection";

function TabContent({ activeTab }) {
    // console.log(props.children)

    return (
        <div className="tab-content">
            {
                activeTab === 0?
                <ProfileSection />:
                <ProfileSection
                    style={{display: "none"}} 
                />
            }
            {
                activeTab === 1?
                <EducationSection />:
                <EducationSection 
                    style={{display: "none"}} 
                />
            }
            {
                activeTab === 2?
                <SkillSection />:
                <SkillSection 
                    style={{display: "none"}} 
                />
            }
            {
                activeTab === 3?
                <MiniProjectSection />:
                <MiniProjectSection 
                    style={{display: "none"}} 
                />
            }
            {
                activeTab === 4?
                <SocialMentionSection />:
                <SocialMentionSection 
                    style={{display: "none"}} 
                />
            }
        </div>
    );
}

export default TabContent;