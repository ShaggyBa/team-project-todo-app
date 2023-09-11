import { ButtonHTMLAttributes } from "react";

export type VariantsOfButton = "add-list" | "add-task" | "delete-list";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantsOfButton;
}
