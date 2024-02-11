import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore/lite";

import { SuccessPhoneStyle, WrapperStyle } from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { VerivicationButtonStyle } from "./pagesStyles";

import { Title } from "../components/text/Title";
import { useStepNavigation } from "../context/Context";
import { labels } from "../components/progress-bar/ProgressBar";
import db from "../firebaseConfig";

const SuccessPhone = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    const saveDataToFirestore = async () => {
      await addDoc(collection(db, "myCollection"), {
        phoneNumber: props?.phoneNumber.fieldValue || "",
      });

      alert("Document written to Database");
    };

    saveDataToFirestore();

    navigate("/create-account");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/check-verification");
  }

  return (
    <>
      <WrapperStyle padding={"30px"}>
        <Title style={{ textAlign: "center" }}>
          Success! Your Phone Number was Veriﬁed.
        </Title>

        <SuccessPhoneStyle>
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="green"
            stroke="green"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
          </svg>
          <span> {props?.phoneNumber.fieldValue} </span>
        </SuccessPhoneStyle>

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
              disabled={props?.currentStep === labels.length}
            >
              {props?.currentStep === labels.length - 1 ? "Confirm" : `Next`}
            </NextButtonStyle>
          </BtnsBlockStyle>
        </VerivicationButtonStyle>
      </WrapperStyle>
    </>
  );
};

export default SuccessPhone;
