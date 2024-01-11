import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  AddSmsFormCheckboxStyle,
  AddSmsFormCheckedStyle,
  FormLabelStyle,
  AddSmsFormStyle,
  ListInputsStyle,
  ListInputsItemStyle,
} from "./formStyles";
import { NextButtonStyle } from "../btns/btnsStyles";

import { Input } from "./Input";
import { ValidError } from "./ValidError";
import { useStepNavigation } from "../../context/Context";
import { labels } from "../progress-bar/ProgressBar";
import { normalizePhoneNumber } from "../../utils/normalizePhoneNumber";

type IAddSMSFormType<T> = {
  readonly inputRef: T | null;
};

export const AddSMSForm: FC<IAddSMSFormType<any>> = ({ inputRef }) => {
  const props = useStepNavigation();
  const navigate = useNavigate();

  function nextHandleClick(direction: string) {
    let newStep = props?.currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= labels.length && props?.setCurrentStep(newStep);

    navigate("/call-me");
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <AddSmsFormStyle noValidate onSubmit={handleSubmit}>
      <FormLabelStyle>ENTER YOUR BUSINESS PHONE NUMBER:</FormLabelStyle>

      {props?.phoneNumber.stateField && props?.phoneNumber.isEmpty && (
        <ValidError>Phone number is a required field</ValidError>
      )}
      {props?.phoneNumber.stateField && props?.phoneNumber.onlyNumbers && (
        <ValidError> There should be only letters! </ValidError>
      )}
      {props?.phoneNumber.stateField && props?.phoneNumber.minLength && (
        <ValidError> Min 2 symbols </ValidError>
      )}
      {props?.phoneNumber.stateField && props?.phoneNumber.maxLength && (
        <ValidError> Max 20 symbols </ValidError>
      )}

      <Input
        ref={inputRef}
        value={props?.phoneNumber.fieldValue || ""}
        name="phoneNumber"
        type="text"
        placeholder="(xxx) - xxx - xx - xx"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          event.currentTarget.value = normalizePhoneNumber(
            event.currentTarget.value,
          );
          props?.phoneNumber.onChange(event);
        }}
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          props?.phoneNumber.blurHandler(event)
        }
      />

      {props?.firstName.stateField && props?.firstName.isEmpty && (
        <ValidError> First Name is a required field </ValidError>
      )}
      {props?.firstName.stateField && props?.firstName.minLength && (
        <ValidError> Min 2 symbols </ValidError>
      )}
      <br />
      {props?.lastName.stateField && props?.lastName.isEmpty && (
        <ValidError> Last Name is a required field </ValidError>
      )}
      {props?.lastName.stateField && props?.lastName.minLength && (
        <ValidError> Min 2 symbols </ValidError>
      )}

      <ListInputsStyle paddingRight="0">
        <ListInputsItemStyle>
          <Input
            name="firstName"
            value={props?.firstName.fieldValue || ""}
            type="text"
            placeholder="First Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props?.firstName.onChange(event)
            }
            onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
              props?.firstName.blurHandler(event)
            }
          />
        </ListInputsItemStyle>

        <ListInputsItemStyle>
          <Input
            name="lastName"
            value={props?.lastName.fieldValue || ""}
            type="text"
            placeholder="Last Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props?.lastName.onChange(event)
            }
            onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
              props?.lastName.blurHandler(event)
            }
          />
        </ListInputsItemStyle>
      </ListInputsStyle>

      {props?.email.stateField && props?.email.isEmpty && (
        <ValidError> Email is a required field </ValidError>
      )}
      {props?.email.stateField && props?.email.isCorrectEmail && (
        <ValidError>Email should have the correct format</ValidError>
      )}

      <Input
        ref={inputRef}
        name="email"
        value={props?.email.fieldValue || ""}
        type="email"
        placeholder="Email Address"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props?.email.onChange(event)
        }
        onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
          props?.email.blurHandler(event)
        }
      />

      <ListInputsStyle paddingRight="0">
        <AddSmsFormCheckboxStyle>
          <Input type="checkbox" style={{ width: 30, cursor: "pointer" }} />
          <AddSmsFormCheckedStyle>
            My organization is the owner of this phone number and I am
            authorized to complete this process.
          </AddSmsFormCheckedStyle>
        </AddSmsFormCheckboxStyle>
      </ListInputsStyle>

      <NextButtonStyle
        type="button"
        onClick={() => nextHandleClick("next")}
        disabled={
          !props?.phoneNumber?.disabledBtn ||
          !props?.email?.disabledBtn ||
          !props?.firstName?.disabledBtn ||
          !props?.lastName?.disabledBtn
        }
      >
        {props?.currentStep === labels.length - 1 ? "Confirm" : `Next`}
      </NextButtonStyle>
    </AddSmsFormStyle>
  );
};
