import { HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

}
export function DefaultButton(props: ButtonProps) {
  const { children } = props;
  return <button>
    {children}
  </button>
}
