import { HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

interface SomeProp extends ButtonProps {

}
export function DefaultButton(props: ButtonProps) {
  const { children } = props;
  return <button>
    {children}
  </button>
}
