import { useState } from "react";
import TabsBar from "../tabsbar/tabs-bar";
import TabContent from "../tabcontent/tab-content";
import ProfileSection from "../profilesection/ProfileSection";
import EducationSection from "../educationsection/educationsection";
import SkillSection from "../skillssection/SkillsSection";
import MiniProjectSection from "../miniprojectsection/miniprojectsection";
import SocialMentionSection from "../socialmentionsection/socialmentionsection";

function TabComponent() {
    const [activeTab, setActiveTab] = useState(-1);

	function handleClick(acti) {
		setActiveTab(acti)
	}

	return (
		<div>
			{/* {console.log(activeTab)} */}

			<TabsBar handleClick={handleClick}/>

			<TabContent activeTab={activeTab}>
				<ProfileSection />
				<EducationSection />
                <SkillSection />
				<MiniProjectSection />
				<SocialMentionSection />
			</TabContent>
        </div>
    )
}

export default TabComponent;
