import { useState } from "react";
import TabsBar from "../tabsbar/tabs-bar";
import TabContent from "../tabcontent/tab-content";
import './tab-component.css';

function TabComponent() {
    const [activeTab, setActiveTab] = useState(0);

	function handleClick(acti) {
		setActiveTab(acti)
	}

	return (
		<div className="tabcomponent-container">
			{/* {console.log(activeTab)} */}

			<TabsBar handleTabButtonClick={handleClick} activeTab={activeTab}/>

			<TabContent activeTab={activeTab}>
			</TabContent>
        </div>
    )
}

export default TabComponent;
