import React from "react";

import s from "./VariantBtn.module.css";

import plusIcon from "../../assets/plus_icon.svg";
import deleteIcon from "../../assets/delete_icon.svg";

import { IButton } from "../../types/IButton.types";

export const VariantBtn: React.FC<IButton> = ({ variant }) => {
	let icon: string;
	let buttonText: string;
	switch (variant) {

		case "add-list":
			icon = plusIcon;
			buttonText = "Add list";
			break;

		case "add-task":
			icon = plusIcon;
			buttonText = "New task";
			break;

		case "delete-list":
			icon = deleteIcon;
			buttonText = "Delete List";
			break;

		case "delete-task":
			icon = deleteIcon;
			buttonText = "Delete Task";
			break;

		default:
			icon = deleteIcon;
			buttonText = "Default-btn";
			break;
	}

	return (
		<button className={s.variantBtn}>
			<img src={icon} alt={buttonText} />
			<span>{buttonText}</span>
		</button>
	);
};
