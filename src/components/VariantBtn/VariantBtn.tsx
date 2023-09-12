import React from "react";

import s from "./VariantBtn.module.css";

import { IButton } from "../../types/IButton.types";

export const VariantBtn: React.FC<IButton> = ({ variant }): JSX.Element => {
	let buttonText: string;

	switch (variant) {
		case "add-list":
			buttonText = "Add List";
			break;
		case "add-task":
			buttonText = "Add Task";
			break;
		case "delete-list":
			buttonText = "Delete List";
			break;
		default:
			buttonText = "Default-btn";
			break;
	}

	return (
		<button className={`${s.variantBtn}`}>
			<img src={""} alt={buttonText} />
			<span>{buttonText}</span>
		</button>
	);
};
