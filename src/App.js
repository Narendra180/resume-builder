import TabComponent from './components/tabscomponent/tab-component';
import RP from './components/resume/rp';
import Resume from './components/resume/resume';
import ResumePreviewAndDownload from './components/resumepreviewanddownload/resumepreviewanddownload';
import './App.css';

function App() {
	return (
		<div className="app">
			<TabComponent />
			<ResumePreviewAndDownload />
			
			<RP />

			<Resume />

		</div>
	)
}

export default App;
