import './tabbutton.css';

function TabButton({tabNumber, btnContent, handleTabButtonClick, className}) {
    return (
        <button 
            className={`tab-btn ${className}`}
            onClick={
                () => handleTabButtonClick(tabNumber)
            }
        >
            {btnContent}
        </button>
    )
}

export default TabButton;