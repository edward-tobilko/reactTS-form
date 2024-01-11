import React, { forwardRef, FC } from "react";

import { InputStyle } from "./formStyles";

export type PropsType = {
  ref?: any;
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  defaultValue?: string;
};

export const Input: FC<PropsType> = forwardRef((props, ref: any) => {
  return (
    <>
      <InputStyle {...props} ref={ref} autoComplete="off" />
    </>
  );
});
