import { ButtonHTMLAttributes } from "react";

export type TVariantsOfButton = "add-list" | "add-task" | "delete-list";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariantsOfButton;
}
