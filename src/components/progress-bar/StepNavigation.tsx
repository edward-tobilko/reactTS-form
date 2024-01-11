import { useEffect, useState, useRef } from "react";

import { CurrentStep } from "./CurrentStep";

type BooleanType = {
  desc: string;
  highlighted: boolean;
  selected: boolean;
  completed: boolean;
};

type StepNavigationType = {
  labels: string[];
  currentStep: number;
};

export const StepNavigation = ({ labels, currentStep }: StepNavigationType) => {
  const [newStep, setNewStep] = useState<object[]>([]);

  const stepRef = useRef<BooleanType[] | null>(null);

  function updateNewStep(stepNumber: number, steps: Array<BooleanType>) {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  }

  useEffect(() => {
    const labelsState = labels.map((label, i) =>
      Object.assign(
        {},
        {
          desc: label,
          completed: false,
          highlighted: i === 0 ? true : false,
          selected: i === 0 ? true : false,
        },
      ),
    );

    stepRef.current = labelsState;
    const current = updateNewStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [labels, currentStep]);

  return (
    <>
      {newStep.map((step: object, i: number) => (
        <CurrentStep key={i} step={step} i={i} newStep={newStep} />
      ))}
    </>
  );
};
