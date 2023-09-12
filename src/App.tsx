import React from "react";
import "./reset.css";
import "./UI-colors.css"
import cssStyles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className={cssStyles.todoApp_Wrapper}>
			<header className={cssStyles.todoApp_Header}>
				<Header />
			</header>

				<div className={cssStyles.todoApp_NavArea}>
					<Sidebar />
				</div>

				<div className={cssStyles.todoApp_TaskArea}>
					<MainContent />
				</div>

			<footer className={cssStyles.todoApp_Footer}>
				<Footer />
			</footer>
		</div>
	);
}

export default App;