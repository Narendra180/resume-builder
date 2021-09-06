import TabButton from "../tabbutton/tabbutton";

function TabsBar({handleClick}) {
    return (
        <div>
            <TabButton 
                handleClick={handleClick}
                btnContent={"Profile"}
                tabNumber={0}
            />
            
            <TabButton 
                handleClick={handleClick}
                btnContent={"Education"}
                tabNumber={1}
            />

            <TabButton 
                handleClick={handleClick}
                btnContent={"Skills"}
                tabNumber={2}
            />

            <TabButton 
                handleClick={handleClick}
                btnContent={"Mini Project"}
                tabNumber={3}
            />

            <TabButton 
                handleClick={handleClick}
                btnContent={"Social"}
                tabNumber={4}
            />
        </div>
    );
}

export default TabsBar;