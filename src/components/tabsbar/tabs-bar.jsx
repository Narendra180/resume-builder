import TabButton from "../tabbutton/tabbutton";
import './tabs-bar.css';

function TabsBar({handleTabButtonClick, activeTab}) {
    return (
        <div className="tabs-bar">
            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Profile"}
                tabNumber={0}
                className={activeTab===0?"active":""}
            />
            
            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Education"}
                tabNumber={1}
                className={activeTab===1?"active":""}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Skills"}
                tabNumber={2}
                className={activeTab===2?"active":""}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Projects"}
                tabNumber={3}
                className={activeTab===3?"active":""}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Social Media"}
                tabNumber={4}
                className={activeTab===4?"active":""}
            />
        </div>
    );
}

export default TabsBar;