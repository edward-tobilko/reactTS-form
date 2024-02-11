import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore/lite";

import { ConfirmAccountStyle, WrapperStyle } from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { Input } from "../components/form/Input";
import { Subtitle } from "../components/text/Subtitle";
import { Title } from "../components/text/Title";
import { labels } from "../components/progress-bar/ProgressBar";
import { useStepNavigation } from "../context/Context";
import db from "../firebaseConfig";

const ConfirmAccountName = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    const saveDataToFirestore = async () => {
      await addDoc(collection(db, "myCollection"), {
        bussinesName: props?.bussinesName.fieldValue || "",
      });

      alert("Document written to Database");
    };

    saveDataToFirestore();

    navigate("/review-info");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/create-account");
  }

  return (
    <>
      <WrapperStyle padding={"30px"}>
        <Title>Conﬁrm Your Account Name</Title>
        <Subtitle pl={"10px"} fs={"14px"}>
          This is a suggested name which will be your "Account  Name" used by
          you and your team members to access  your account. <br />
          <br />
          To change it, just edit and submit.
        </Subtitle>

        <ConfirmAccountStyle>
          <Input defaultValue={props?.bussinesName.fieldValue} />
        </ConfirmAccountStyle>

        <BtnsBlockStyle style={{ marginTop: 30, marginBottom: 40 }}>
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

export default ConfirmAccountName;
