import React from "react";
import "./reset.css";
import "./UI-styles.css";
import { VariantBtn } from "./components/VariantBtn/VariantBtn";

function App() {
	return (
		<div className="app">
			<header className="app-header">
			</header>
			<div className="container">
				<VariantBtn variant="add-task" />
				<VariantBtn variant="add-list" />
				<VariantBtn variant="delete-list" />
				<VariantBtn />
			</div>
			<footer className="app-footer"></footer>
		</div>
	);
}

export default App;
