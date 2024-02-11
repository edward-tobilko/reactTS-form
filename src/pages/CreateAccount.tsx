import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore/lite";

import {
  CreateAccountBusinessPhoneNumberStyle,
  CreateAccountBusinessPhoneStyle,
  CreateAccountBusinessPhoneTitleStyle,
  WrapperStyle,
} from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { Subtitle } from "../components/text/Subtitle";
import { Title } from "../components/text/Title";
import { BusinessForm } from "../components/form/BusinessForm";
import { ServiceAddressForm } from "../components/form/ServiceAddressForm";
import { labels } from "../components/progress-bar/ProgressBar";
import { useStepNavigation } from "../context/Context";
import db from "../firebaseConfig";

const CreateAccount = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  const inputRef = useRef<HTMLFormElement>(null);

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    const saveDataToFirestore = async () => {
      await addDoc(collection(db, "myCollection"), {
        phoneNumber: props?.phoneNumber?.fieldValue || "",
        bussinesPhoneNumber: props?.bussinesPhoneNumber?.fieldValue || "",
        email: props?.email?.fieldValue || "",
        firstName: props?.firstName?.fieldValue || "",
        lastName: props?.lastName?.fieldValue || "",
        streetNumber: props?.streetNumber?.fieldValue || "",
        streetName: props?.streetName?.fieldValue || "",
        cityName: props?.cityName?.fieldValue || "",
        zipCode: props?.zipCode?.fieldValue || "",
        bussinesName: props?.bussinesName?.disabledBtn || "",
      });

      alert("Document written to Database");
    };

    saveDataToFirestore();

    navigate("/confirm-account-name");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/success-phone");
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <WrapperStyle padding={"30px"}>
        <Title>Create Your Alive Account</Title>
        <Subtitle pl={"0"} fs={"14px"}>
          To complete your Alive account setup, please complete the following:
        </Subtitle>

        <CreateAccountBusinessPhoneStyle>
          <CreateAccountBusinessPhoneTitleStyle>
            YOUR BUSINESS PHONE NUMBER:
          </CreateAccountBusinessPhoneTitleStyle>
          <CreateAccountBusinessPhoneNumberStyle>
            {props?.phoneNumber.fieldValue}
          </CreateAccountBusinessPhoneNumberStyle>
        </CreateAccountBusinessPhoneStyle>

        <BusinessForm handleSubmit={handleSubmit} inputRef={inputRef} />
        <ServiceAddressForm handleSubmit={handleSubmit} inputRef={inputRef} />

        <BtnsBlockStyle style={{ marginTop: 30 }}>
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
              !props?.phoneNumber?.disabledBtn ||
              !props?.bussinesPhoneNumber?.disabledBtn ||
              !props?.email?.disabledBtn ||
              !props?.firstName?.disabledBtn ||
              !props?.lastName?.disabledBtn ||
              !props?.streetNumber?.disabledBtn ||
              !props?.streetName?.disabledBtn ||
              !props?.cityName?.disabledBtn ||
              !props?.zipCode?.disabledBtn ||
              !props?.bussinesName?.disabledBtn
            }
          >
            {props?.currentStep === labels.length - 1 ? "Confirm" : `Next`}
          </NextButtonStyle>
        </BtnsBlockStyle>
      </WrapperStyle>
    </>
  );
};

export default CreateAccount;
