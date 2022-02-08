import './tabbutton.css';

function TabButton({tabNumber, btnContent, handleTabButtonClick}) {
    return (
        <button 
            className="tab-btn"
            onClick={
                () => handleTabButtonClick(tabNumber)
            }
        >
            {btnContent}
        </button>
    )
}

export default TabButton;