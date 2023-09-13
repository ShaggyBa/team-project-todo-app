import React from "react";
import "./reset.css";
import "./UI-styles.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
	const lists = [{ id: 1, title: "Покупки" }, { id: 2, title: "Фронтенд" }, { id: 3, title: "Способы самоубийства" }]

	return (
		<div className="app">
			<header className="app-header">
			</header>
			<div className="app-main">
				<Sidebar lists={lists} />
				{/* Main */}
				<div className="app-content"></div>
			</div>
			<footer className="app-footer"></footer>
		</div>
	);
}

export default App;
