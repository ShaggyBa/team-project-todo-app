import { ButtonHTMLAttributes } from "react";

export type TVariantsOfButton =
  | "add-list"
  | "add-task"
  | "delete-list"
  | "delete-task"
  | "cancel"
  | "add"
  | "close";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariantsOfButton;
  onClick?: () => void;
}
