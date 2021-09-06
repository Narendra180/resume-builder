function TabButton({tabNumber, btnContent, handleClick}) {
    return (
        <button 
            className="tab"
            onClick={
                () => handleClick(tabNumber)
            }
        >
            {btnContent}
        </button>
    )
}

export default TabButton;