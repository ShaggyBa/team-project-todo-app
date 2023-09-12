import React from "react";
import "./reset.css";
import "./UI-colors.css"
import cssStyles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className={cssStyles.todoApp_Wrapper}>
			<header className={cssStyles.todoApp_Header}>

			</header>
			<div className={cssStyles.todoApp_MainWrapper}>
				<div className={cssStyles.todoApp_NavArea}>
					<Sidebar />
				</div>
				<div className={cssStyles.todoApp_TaskArea}>
					{/* Main */}
				</div>
			</div>
			<footer className={cssStyles.todoApp_Footer}>

			</footer>
		</div>
	);
}

export default App;