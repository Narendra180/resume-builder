// import { useState } from 'react';

import TabComponent from './components/tabscomponent/tab-component';
import ResumePreview from './components/resumepreview/resume-preview';
import './App.css';

function App() {
	return (
		<div className="app">
			<TabComponent />
			
			<ResumePreview />
		</div>
	)
}

export default App;
