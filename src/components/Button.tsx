import { type ReactNode } from "react";
import { getButtonClasses, type ButtonType } from "~/helpers/buttons";

type ButtonComponent = {
  as?: "button" | "a" | "div";
  type?: ButtonType;
  children: ReactNode;
};

export const Button = (props: ButtonComponent) => {
  const CustomButtonTag = props.as ?? "button";
  return (
    <CustomButtonTag
      className={`${getButtonClasses(props.type)} cursor-pointer`}
    >
      {props.children}
    </CustomButtonTag>
  );
};
