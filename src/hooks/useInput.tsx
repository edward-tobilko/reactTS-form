import { useState } from "react";

import { useValidation } from "./useValidation";

type UseInputType = {
  fieldValue: string;
  stateField: boolean;
  setFieldValue: (fieldValue: string) => void;
  blurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useInput = (initialValue: string, validations: object): object => {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [stateField, setStateField] = useState(false);

  const valid = useValidation(fieldValue, validations);

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setStateField(true);

    console.log(event);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.currentTarget.value);
  };

  return {
    fieldValue,
    blurHandler,
    onChange,
    setFieldValue,
    stateField,
    ...valid,
  } as UseInputType;
};
