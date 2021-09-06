// function Temp(props) {
//     return (
//         <div>
//             {console.log(props)}       
//         </div>
//     )
// }

// export default Temp;

// const [allTabs,setAllTabs] = useState([]);
	// const [tabsState, setTabsState] = useState([0, 0, 0]);
	// // const [tab1State,setTab1State] = useState(false);
	// // const [tab2State,setTab2State] = useState(false);
	// // const [tab3State,setTab3State] = useState(false);


	// useEffect(() => {
	// 	setAllTabs([
	// 			{
	// 				id: 1,
	// 				heading: "London",
	// 				content: "This is tab 1"
	// 			},
		
	// 			{
	// 				id: 2,
	// 				heading: "New York",
	// 				content: "This is tab2"
	// 			},
		
	// 			{
	// 				id: 3,
	// 				heading: "Delhi",
	// 				content: "This is tab2"
	// 			}
	// 		]
	// 	)
	// }, []);

	// function handleClick(e) {
	// 	switch(e.target.innerText) {
	// 		case "Tab1":
	// 			// setTab1State(true);
	// 			// setTab2State(false);
	// 			// setTab3State(false);
	// 			setTabsState([1, 0, 0]);
	// 			break;
	// 		case "Tab2":
	// 			// setTab1State(false);
	// 			// setTab2State(true);
	// 			// setTab3State(false);
	// 			setTabsState([0, 1, 0]);		
	// 			break;	
	// 		case "Tab3":
	// 			// setTab1State(false);
	// 			// setTab2State(false);
	// 			// setTab3State(true);
	// 			setTabsState([0, 0, 1]);
	// 			break;
	// 		default:			
	// 	}
	// }
	// return (
	// 	<div className="App">
	// 		<TabsBar handleClick={handleClick}/>
	// 		{
	// 			allTabs.map((tab,i) => {
	// 				return (
	// 					tabsState[i]?
	// 					<TabContent
	// 						key={tab.id}
	// 						{...tab}
	// 					/>
	// 					: 
	// 					null
	// 				);
	// 			})
	// 		}
	// 		{/* {tab1State?<TabContent {...allTabs[0]}/>: null}
	// 		{tab2State?<TabContent {...allTabs[1]}/>: null}
	// 		{tab3State?<TabContent {...allTabs[2]}/>: null}			 */}
	// 	</div>
	// );