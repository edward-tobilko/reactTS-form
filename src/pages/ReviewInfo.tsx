import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore/lite";

import { ReviewInfoListStyle, WrapperStyle } from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { Subtitle } from "../components/text/Subtitle";
import { Title } from "../components/text/Title";
import { labels } from "../components/progress-bar/ProgressBar";
import { useStepNavigation } from "../context/Context";
import db from "../firebaseConfig";

const ReviewInfo = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    const saveDataToFirestore = async () => {
      await addDoc(collection(db, "myCollection"), {
        bussinesPhoneNumber: props?.bussinesPhoneNumber?.fieldValue || "",
        bussinesName: props?.bussinesName?.disabledBtn || "",
        firstName: props?.firstName?.fieldValue || "",
        lastName: props?.lastName?.fieldValue || "",
        email: props?.email?.fieldValue || "",
        phoneNumber: props?.phoneNumber.fieldValue || "",
        streetName: props?.streetName?.fieldValue || "",
        streetNumber: props?.streetNumber?.fieldValue || "",
        cityName: props?.cityName?.fieldValue || "",
        zipCode: props?.zipCode?.fieldValue || "",
      });

      alert("Document written to Database");
    };

    saveDataToFirestore();

    navigate("/success-created-account");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/confirm-account-name");
  }

  return (
    <>
      <WrapperStyle padding={"30px"}>
        <Title>Review Your Information & Create Account</Title>
        <Subtitle pl={"0"} fs={"14px"}>
          Please review your information before creating your Alive account.
        </Subtitle>

        <ul>
          <ReviewInfoListStyle>
            BUSINESS PHONE NUMBER:
            <span> {props?.bussinesPhoneNumber.fieldValue} </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            NAME OF BUSINESS: <span> {props?.bussinesName.fieldValue} </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            AUTHORIZED SIGNER:
            <span>
              {props?.firstName.fieldValue} {props?.lastName.fieldValue}
            </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            EMAIL ADDRESS: <span> {props?.email.fieldValue} </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            YOUR PHONE NUMBER: <span> {props?.phoneNumber.fieldValue} </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            ACCOUNT NAME: <span> {props?.bussinesName.fieldValue} </span>
          </ReviewInfoListStyle>
          <ReviewInfoListStyle>
            SERVICE ADDRESS:
            <span>
              {props?.streetName.fieldValue} {props?.streetNumber.fieldValue}
            </span>
            <span>
              {props?.cityName.fieldValue}, {props?.zipCode.fieldValue}
            </span>
          </ReviewInfoListStyle>
        </ul>

        <BtnsBlockStyle style={{ marginTop: 30, marginBottom: 30 }}>
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
            disabled={props?.currentStep === labels.length}
          >
            {props?.currentStep === labels.length - 1 ? "Confirm" : `Next`}
          </NextButtonStyle>
        </BtnsBlockStyle>
      </WrapperStyle>
    </>
  );
};

export default ReviewInfo;
