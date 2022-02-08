import TabButton from "../tabbutton/tabbutton";
import './tabs-bar.css';

function TabsBar({handleTabButtonClick}) {
    return (
        <div className="tabs-bar">
            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Profile"}
                tabNumber={0}
            />
            
            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Education"}
                tabNumber={1}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Skills"}
                tabNumber={2}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Projects"}
                tabNumber={3}
            />

            <TabButton 
                handleTabButtonClick={handleTabButtonClick}
                btnContent={"Social Media"}
                tabNumber={4}
            />
        </div>
    );
}

export default TabsBar;