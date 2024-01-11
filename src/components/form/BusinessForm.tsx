import { FC } from "react";

import {
  BusinessFormStyle,
  ListInputsItemStyle,
  ListInputsStyle,
} from "./formStyles";

import { Input } from "./Input";
import { useStepNavigation } from "../../context/Context";
import { ValidError } from "./ValidError";
import { normalizePhoneNumber } from "../../utils/normalizePhoneNumber";

type BusinessFormType<G> = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inputRef: G | null;
};

export const BusinessForm: FC<BusinessFormType<any>> = ({
  handleSubmit,
  inputRef,
}) => {
  const props = useStepNavigation();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <BusinessFormStyle>
        {props?.bussinesName.stateField && props?.bussinesName.isEmpty && (
          <ValidError>Bussines number is a required field</ValidError>
        )}

        {props?.bussinesName.stateField && props?.bussinesName.maxLength && (
          <ValidError>Max 15 symbols</ValidError>
        )}

        {props?.bussinesName.stateField && props?.bussinesName.minLength && (
          <ValidError>Min 3 symbols</ValidError>
        )}

        <Input
          ref={inputRef}
          name="bussinesName"
          type="text"
          placeholder="Name of Business"
          value={props?.bussinesName.fieldValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props?.bussinesName.onChange(event)
          }
          onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
            props?.bussinesName.blurHandler(event)
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

        <ListInputsStyle paddingRight="14px">
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

        {props?.bussinesPhoneNumber.stateField &&
          props?.bussinesPhoneNumber.isEmpty && (
            <ValidError>Phone number is a required field</ValidError>
          )}
        {props?.bussinesPhoneNumber.stateField &&
          props?.bussinesPhoneNumber.onlyNumbers && (
            <ValidError> There should be only letters! </ValidError>
          )}
        {props?.bussinesPhoneNumber.stateField &&
          props?.bussinesPhoneNumber.minLength && (
            <ValidError> Min 2 symbols </ValidError>
          )}
        {props?.bussinesPhoneNumber.stateField &&
          props?.bussinesPhoneNumber.maxLength && (
            <ValidError> Max 20 symbols </ValidError>
          )}

        <Input
          ref={inputRef}
          value={props?.bussinesPhoneNumber.fieldValue || ""}
          name="bussinesPhoneNumber"
          type="text"
          placeholder="The Best Phone Number to Reach You"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            event.currentTarget.value = normalizePhoneNumber(
              event.currentTarget.value,
            );
            props?.bussinesPhoneNumber.onChange(event);
          }}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
            props?.bussinesPhoneNumber.blurHandler(event)
          }
        />
      </BusinessFormStyle>
    </form>
  );
};
