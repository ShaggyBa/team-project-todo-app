import { ButtonHTMLAttributes } from "react";

export type TVariantsOfButton =
  | "add-list"
  | "add-task"
  | "delete-list"
  | "delete-task"
  | "cancel"
  | "add"
  | "close"
  | "edit-title";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariantsOfButton;
}
