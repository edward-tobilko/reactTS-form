import { useState, useEffect } from "react";

type UseValidationType = {
  isEmpty: boolean;
  minLength: boolean;
  maxLength: boolean;
  isCorrectEmail: boolean;
  disabledBtn: boolean;
  onlyNumbers: boolean;
};

export const useValidation = (
  value: string,
  validations: any,
): UseValidationType => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [onlyNumbers, setOnlyNumbers] = useState(false);

  useEffect(() => {
    for (const item in validations) {
      switch (item) {
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case "minLength":
          value.length < validations[item]
            ? setMinLength(true)
            : setMinLength(false);
          break;

        case "maxLength":
          value.length > validations[item]
            ? setMaxLength(true)
            : setMaxLength(false);
          break;

        case "isCorrectEmail":
          const res =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          res.test(String(value).toLowerCase())
            ? setIsCorrectEmail(false)
            : setIsCorrectEmail(true);
          break;

        case "onlyNumbers":
          const re = /^[0-9\+\ ]+$/;
          re.test(String(value).toLowerCase())
            ? setOnlyNumbers(false)
            : setOnlyNumbers(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLength || maxLength || isCorrectEmail || onlyNumbers) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [isEmpty, minLength, maxLength, isCorrectEmail, onlyNumbers]);

  return {
    isEmpty,
    minLength,
    maxLength,
    isCorrectEmail,
    disabledBtn,
    onlyNumbers,
  };
};
