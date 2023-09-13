import React from "react";
import "./reset.css";
import "./UI-colors.css";
import { ListItem } from "./components/VariantListItem/ListItem";
import { ListItems } from "./data/ListItemData";

function App() {
	return (
		<div className="app">
			<header className="app-header">
			</header>
			<div className="container">
				<ListItem item = {ListItems[0]}></ListItem>
				<ListItem item = {ListItems[1]}></ListItem>
			</div>
		</div>
	);
}

export default App;
