import React from "react";
import "./reset.css";
import "./UI-styles.css";
import { VariantBtn } from "./components/VariantBtn/VariantBtn";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			<header className="app-header">
			</header>
			<div className="app-main">
				<Sidebar />
				{/* Main */}
				<div className="app-content"></div>
			</div>
			<footer className="app-footer"></footer>
		</div>
	);
}

export default App;
