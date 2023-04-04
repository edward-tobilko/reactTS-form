import React from "react";
import { ValidErrorStyle } from "./formStyles";

type ValidErrorType = {
  children: React.ReactNode;
};

export const ValidError = ({ children }: ValidErrorType) => {
  return <ValidErrorStyle> {children} </ValidErrorStyle>;
};
