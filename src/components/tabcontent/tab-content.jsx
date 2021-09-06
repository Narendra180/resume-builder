
function TabContent(props) {
    // console.log(props.children)
    return (
        <div className="tab-content">
            {
                props.children.length
                ?
                (props.children[props.activeTab])
                :
                ([props.children][props.activeTab])
            }
            
        </div>
    );
}

export default TabContent;