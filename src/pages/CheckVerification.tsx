import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore/lite";

import {
  CheckVerificationPhoneStyle,
  VerificationCheckboxStyle,
  VerificationLinkStyle,
  VerivicationButtonStyle,
  VerivicationStyle,
} from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { Title } from "../components/text/Title";
import { InputVerification } from "../components/form/InputVerification";
import { labels } from "../components/progress-bar/ProgressBar";
import { useStepNavigation } from "../context/Context";
import { ValidError } from "../components/form/ValidError";
import db from "../firebaseConfig";

const CheckVerification = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  const checkVerificationRef = useRef<HTMLFormElement>(null);

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    const saveDataToFirestore = async () => {
      await addDoc(collection(db, "myCollection"), {
        inputVerification1: props?.inputVerification1.fieldValue || "",
        inputVerification2: props?.inputVerification2.fieldValue || "",
        inputVerification3: props?.inputVerification3.fieldValue || "",
        inputVerification4: props?.inputVerification4.fieldValue || "",
      });

      alert("Document written to Database");
    };

    saveDataToFirestore();

    navigate("/success-phone");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/call-me");
  }

  useEffect(() => {
    if (checkVerificationRef.current) {
      checkVerificationRef.current.focus();
    }
  }, []);

  return (
    <>
      <CheckVerificationPhoneStyle>
        <Title style={{ textAlign: "center" }}>
          Enter 4 Digit Veriﬁcation PIN Number
        </Title>

        <VerivicationStyle>
          <div style={{ position: "relative" }}>
            {props?.inputVerification1.stateField &&
              props?.inputVerification1.isEmpty && (
                <VerificationCheckboxStyle>
                  <ValidError>Required field</ValidError>
                </VerificationCheckboxStyle>
              )}

            {props?.inputVerification1.stateField &&
              props?.inputVerification1.maxLength && (
                <VerificationCheckboxStyle>
                  <ValidError>Max 1 symbol</ValidError>
                </VerificationCheckboxStyle>
              )}

            <br />

            <InputVerification
              name="inputVerification1"
              ref={checkVerificationRef}
              value={props?.inputVerification1.fieldValue || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.inputVerification1.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.inputVerification1.blurHandler(event)
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {props?.inputVerification2.stateField &&
              props?.inputVerification2.isEmpty && (
                <VerificationCheckboxStyle>
                  <ValidError>Required field</ValidError>
                </VerificationCheckboxStyle>
              )}

            {props?.inputVerification2.stateField &&
              props?.inputVerification2.maxLength && (
                <VerificationCheckboxStyle>
                  <ValidError>Max 1 symbol</ValidError>
                </VerificationCheckboxStyle>
              )}

            <br />

            <InputVerification
              name="inputVerification2"
              ref={checkVerificationRef}
              value={props?.inputVerification2.fieldValue || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.inputVerification2.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.inputVerification2.blurHandler(event)
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {props?.inputVerification3.stateField &&
              props?.inputVerification3.isEmpty && (
                <VerificationCheckboxStyle>
                  <ValidError>Required field</ValidError>
                </VerificationCheckboxStyle>
              )}

            {props?.inputVerification3.stateField &&
              props?.inputVerification3.maxLength && (
                <VerificationCheckboxStyle>
                  <ValidError>Max 1 symbol</ValidError>
                </VerificationCheckboxStyle>
              )}

            <br />

            <InputVerification
              name="inputVerification"
              ref={checkVerificationRef}
              value={props?.inputVerification3.fieldValue || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.inputVerification3.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.inputVerification3.blurHandler(event)
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            {props?.inputVerification4.stateField &&
              props?.inputVerification4.isEmpty && (
                <VerificationCheckboxStyle>
                  <ValidError>Required field</ValidError>
                </VerificationCheckboxStyle>
              )}

            {props?.inputVerification4.stateField &&
              props?.inputVerification4.maxLength && (
                <VerificationCheckboxStyle>
                  <ValidError>Max 1 symbol</ValidError>
                </VerificationCheckboxStyle>
              )}

            <br />

            <InputVerification
              name="inputVerification"
              ref={checkVerificationRef}
              value={props?.inputVerification4.fieldValue || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.inputVerification4.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.inputVerification4.blurHandler(event)
              }
            />
          </div>
        </VerivicationStyle>
        <VerivicationButtonStyle>
          <BtnsBlockStyle>
            <PrevButtonStyle
              type="button"
              disabled={props?.currentStep === 1}
              onClick={() => prevHandleClick("")}
            >
              Prev
            </PrevButtonStyle>

            <NextButtonStyle
              type="button"
              onClick={() => nextHandleClick("next")}
              disabled={
                !props?.inputVerification1.disabledBtn ||
                !props?.inputVerification2.disabledBtn ||
                !props?.inputVerification3.disabledBtn ||
                !props?.inputVerification4.disabledBtn
              }
            >
              {props?.currentStep === labels.length - 1 ? "Confirm" : `Next`}
            </NextButtonStyle>
          </BtnsBlockStyle>
        </VerivicationButtonStyle>

        <VerificationLinkStyle href="#">Call Me Again</VerificationLinkStyle>
      </CheckVerificationPhoneStyle>
    </>
  );
};

export default CheckVerification;
