import TabComponent from './components/tabscomponent/tab-component';
import RP from './components/resume/rp';
import Resume from './components/resume/resume';
import ResumePreviewAndDownload from './components/resumepreviewanddownload/resumepreviewanddownload';
// import TestComp from './comp';
import './App.css';

function App() {
	return (
		<div className="app">

			<h1 className="app-title">Resume Builder</h1>
			<TabComponent />

			<ResumePreviewAndDownload />
			
			{/* <RP /> */}

			<Resume />

			{/* <TestComp /> */}
		</div>
	)
}

export default App;
