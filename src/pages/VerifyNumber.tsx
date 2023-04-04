import { useRef, useEffect } from "react";

import { AddSMSForm } from "../components/form/AddSMSForm";
import { Title } from "../components/text/Title";
import { WrapperStyle } from "./pagesStyles";

const VerifyNumber = () => {
  const inputRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <WrapperStyle padding={"20px 50px 40px 30px"}>
        <Title>Add SMS to Your Business Line</Title>
        <AddSMSForm inputRef={inputRef} />
      </WrapperStyle>
    </>
  );
};

export default VerifyNumber;
