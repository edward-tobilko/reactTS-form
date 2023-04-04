import { ProgressBarStyle } from "./progressBarStyles";

import { useStepNavigation } from "../../context/Context";
import { StepNavigation } from "./StepNavigation";

export const labels = [
  "Verify Number",
  "Call Me",
  "Submit",
  "Next",
  "Create Account",
  "Confirm Account",
  "Review Account",
  "Success!",
];

const ProgressBar = () => {
  const props = useStepNavigation();

  return (
    <>
      <ProgressBarStyle>
        <StepNavigation labels={labels} currentStep={props?.currentStep} />
      </ProgressBarStyle>
    </>
  );
};

export default ProgressBar;
