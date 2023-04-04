import "./progress-bar.css";

type CurrentStepType = {
  step: any;
  i: number;
  newStep: object[];
};

export const CurrentStep = ({ step, i, newStep }: CurrentStepType) => {
  return (
    <>
      <div
        className={
          i !== newStep.length - 1 ? "current__step" : "current__step__active"
        }
      >
        <div className="current__stepInfo">
          <div
            className={`current__stepId ${
              step.selected ? "current__stepId__active" : "current__stepId"
            }`}
          >
            {step.completed ? (
              <span style={{ fontWeight: 600, color: "#ea6422" }}>
                &#10003;
              </span>
            ) : (
              i + 1
            )}
          </div>
          <div
            className={`current__stepDesc ${
              step.highlighted
                ? "current__stepDesc__active"
                : "current__stepDesc"
            }`}
          >
            <p> {step.desc} </p>
          </div>
        </div>
        <div
          className={`current__stepLine ${
            step.completed ? "current__stepLine__active" : "current__stepLine"
          }`}
        ></div>
      </div>
    </>
  );
};
