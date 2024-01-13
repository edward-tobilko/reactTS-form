import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { WrapperStyle } from "./pagesStyles";

import {
  BtnsBlockStyle,
  NextButtonStyle,
  PrevButtonStyle,
} from "../components/btns/btnsStyles";
import { Title } from "../components/text/Title";
import { labels } from "../components/progress-bar/ProgressBar";
import { useStepNavigation } from "../context/Context";

const CallMe = () => {
  const props = useStepNavigation();

  const navigate = useNavigate();

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/check-verification");
  }

  function prevHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/");
  }

  return (
    <>
      <WrapperStyle padding={"30px"}>
        <Title style={{ paddingBottom: 40 }}>
          You will immediately receive an automated phone call to
          <span> {props?.phoneNumber.fieldValue} </span>
          with a PIN number to verify ownership. <br />
          <br /> Have a pen and paper handy!
        </Title>

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
      </WrapperStyle>
    </>
  );
};

export default CallMe;
