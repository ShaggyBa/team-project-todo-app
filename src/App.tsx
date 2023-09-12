import React from "react";
import logo from "./assets/logo.svg";
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
		</div>
	);
}

export default App;
