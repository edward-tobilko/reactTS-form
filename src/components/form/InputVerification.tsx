import { forwardRef, FC } from "react";

import { InputVerificationStyle } from "./formStyles";

import { PropsType } from "./Input";

export const InputVerification: FC<PropsType> = forwardRef(
  (props, ref: any) => {
    return (
      <>
        <InputVerificationStyle {...props} ref={ref} type="number" />
      </>
    );
  },
);
