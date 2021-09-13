import { useState } from "react";
import TabsBar from "../tabsbar/tabs-bar";
import TabContent from "../tabcontent/tab-content";


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
			</TabContent>
        </div>
    )
}

export default TabComponent;
