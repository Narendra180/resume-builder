function TabButton({tabNumber, btnContent, handleTabButtonClick}) {
    return (
        <button 
            className="tab"
            onClick={
                () => handleTabButtonClick(tabNumber)
            }
        >
            {btnContent}
        </button>
    )
}

export default TabButton;