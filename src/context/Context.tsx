import { useContext, useState, createContext, PropsWithChildren } from "react";

import { useInput } from "../hooks/useInput";

type ContextType = {
  currentStep: number;
  phoneNumber: any;
  bussinesPhoneNumber: any;
  inputVerification1: any;
  inputVerification2: any;
  inputVerification3: any;
  inputVerification4: any;
  email: any;
  firstName: any;
  lastName: any;
  bussinesName: any;
  streetNumber: any;
  streetName: any;
  cityName: any;
  zipCode: any;
  setCurrentStep: (currentStep: number) => void;
};

const Context = createContext<ContextType>({} as ContextType);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(1);

  const phoneNumber = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 20,
    onlyNumbers: false,
  });
  const bussinesPhoneNumber = useInput("", {
    isEmpty: true,
    minLength: 3,
    maxLength: 20,
    onlyNumbers: false,
  });
  const email = useInput("", { isEmpty: true, isCorrectEmail: false });
  const firstName = useInput("", { isEmpty: true, minLength: 3 });
  const lastName = useInput("", { isEmpty: true, minLength: 3 });
  const inputVerification1 = useInput("", { isEmpty: true, maxLength: 1 });
  const inputVerification2 = useInput("", { isEmpty: true, maxLength: 1 });
  const inputVerification3 = useInput("", { isEmpty: true, maxLength: 1 });
  const inputVerification4 = useInput("", { isEmpty: true, maxLength: 1 });
  const bussinesName = useInput("", {
    isEmpty: true,
    maxLength: 15,
    minLength: 3,
  });
  const streetNumber = useInput("", { isEmpty: true });
  const streetName = useInput("", { isEmpty: true, maxLength: 30 });
  const cityName = useInput("", { isEmpty: true, maxLength: 15, minLength: 2 });
  const zipCode = useInput("", { isEmpty: true, minLength: 2 });

  return (
    <Context.Provider
      value={{
        currentStep,
        phoneNumber,
        bussinesPhoneNumber,
        lastName,
        firstName,
        email,
        inputVerification1,
        inputVerification2,
        inputVerification3,
        inputVerification4,
        bussinesName,
        streetNumber,
        streetName,
        cityName,
        zipCode,
        setCurrentStep,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStepNavigation = () => useContext(Context);
