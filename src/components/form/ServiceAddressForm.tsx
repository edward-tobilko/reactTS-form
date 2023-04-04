import {
  ListInputsStyle,
  ListInputsItemStyle,
  BusinessFormStyle,
  FormLabelStyle,
  StreetNumberStyle,
  StreetInputStyle,
} from "./formStyles";
import { FC } from "react";

import { Input } from "./Input";
import { Select } from "./Select";
import { useStepNavigation } from "../../context/Context";
import { ValidError } from "./ValidError";
import { statesData } from "../../utils/statesData";

type OnSubmitType<K> = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  inputRef: K | null;
};

export const ServiceAddressForm: FC<OnSubmitType<any>> = ({
  handleSubmit,
  inputRef,
}) => {
  const props = useStepNavigation();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <BusinessFormStyle>
        <FormLabelStyle>SERVICE ADDRESS</FormLabelStyle>

        {props?.streetNumber.stateField && props?.streetNumber.isEmpty && (
          <ValidError>Street number is a required field</ValidError>
        )}

        <br />

        {props?.streetName.stateField && props?.streetName.isEmpty && (
          <ValidError>Street name is a required field</ValidError>
        )}
        {props?.streetName.stateField && props?.streetName.maxLength && (
          <ValidError>Max 20 symbols</ValidError>
        )}

        <ListInputsStyle paddingRight="14px">
          <StreetNumberStyle>
            <Input
              ref={inputRef}
              name="streetNumber"
              type="number"
              placeholder="Str.Number"
              value={props?.streetNumber.fieldValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.streetNumber.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.streetNumber.blurHandler(event)
              }
            />
          </StreetNumberStyle>

          <StreetInputStyle>
            <Input
              ref={inputRef}
              name="streetName"
              type="text"
              placeholder="Street Name"
              value={props?.streetName.fieldValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.streetName.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.streetName.blurHandler(event)
              }
            />
          </StreetInputStyle>
        </ListInputsStyle>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Address Line 2 (optional)"
        />

        {props?.cityName.stateField && props?.cityName.isEmpty && (
          <ValidError>City name is a required field</ValidError>
        )}
        {props?.cityName.stateField && props?.cityName.maxLength && (
          <ValidError>Max 15 symbols</ValidError>
        )}
        {props?.cityName.stateField && props?.cityName.minLength && (
          <ValidError>Min 2 symbol</ValidError>
        )}

        <br />

        {props?.zipCode.stateField && props?.zipCode.isEmpty && (
          <ValidError>ZIP Code is a required field</ValidError>
        )}
        {props?.zipCode.stateField && props?.zipCode.minLength && (
          <ValidError>Min 2 symbol</ValidError>
        )}

        <ListInputsStyle paddingRight="14px">
          <ListInputsItemStyle>
            <Input
              name="cityName"
              ref={inputRef}
              type="text"
              placeholder="City"
              value={props?.cityName.fieldValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.cityName.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.cityName.blurHandler(event)
              }
            />
          </ListInputsItemStyle>

          <ListInputsItemStyle>
            <Select name="select">
              {statesData?.map((state, index) => (
                <option key={index}> {state.name} </option>
              ))}
            </Select>
          </ListInputsItemStyle>
        </ListInputsStyle>

        <ListInputsStyle paddingRight="14px">
          <ListInputsItemStyle>
            <Input
              name="zipCode"
              type="number"
              placeholder="ZIP / Postal Code"
              value={props?.zipCode.fieldValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                props?.zipCode.onChange(event)
              }
              onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                props?.zipCode.blurHandler(event)
              }
            />
          </ListInputsItemStyle>

          <ListInputsItemStyle>
            <Input type="number" placeholder="ZIP Plus 4 (optional)" />
          </ListInputsItemStyle>
        </ListInputsStyle>
      </BusinessFormStyle>
    </form>
  );
};
