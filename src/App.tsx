import React from "react";
import "./reset.css";
import "./UI-colors.css"
import cssStyles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Footer } from "./components/Footer/Footer";

const App: React.FC = () => {
	/*Отрефакторил от нативности компоненты, теперь <header> .. etc - возвращает компонента*/
	return (
		<div className={cssStyles.todoApp__wrapper}>
			<Header />
			<Sidebar />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;