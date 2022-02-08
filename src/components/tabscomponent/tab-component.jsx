import { useState } from "react";
import TabsBar from "../tabsbar/tabs-bar";
import TabContent from "../tabcontent/tab-content";


function TabComponent() {
    const [activeTab, setActiveTab] = useState(0);

	function handleClick(acti) {
		setActiveTab(acti)
	}

	return (
		<div className="tabcomponent-container">
			{/* {console.log(activeTab)} */}

			<TabsBar handleTabButtonClick={handleClick}/>

			<TabContent activeTab={activeTab}>
			</TabContent>
        </div>
    )
}

export default TabComponent;
