import styled from "styled-components";

// AddSMSForm component
export const AddSmsFormStyle = styled.form`
  max-width: 320px;

  @media screen and (max-width: 420px) {
    br {
      display: none;
    }
    font-size: 11px;
    max-width: 250px;
  }
`;

export const FormLabelStyle = styled.label`
  font-size: 12px;
  font-weight: 500;
`;

export const AddSmsFormCheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`;

export const AddSmsFormCheckedStyle = styled.p`
  font-size: 12px;
  padding-left: 5px;
`;

// Input component
export const InputStyle = styled.input`
  max-width: 300px;
  width: 100%;
  margin: 7px 0;
  padding: 10px 0 10px 10px;
  border: 2px solid var(--greyColor);
  border-radius: 5px;
  font-size: 13px;

  @media screen and (max-width: 420px) {
    padding: 10px 0 10px 5px;
    font-size: 11.5px;
  }
`;

// InputVerification component
export const InputVerificationStyle = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  border: 2px solid var(--greyColor);
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    margin-top: 25px;
  }
`;

// BusinessForm and ServiceAddressForm components
export const BusinessFormStyle = styled.div`
  padding-top: 20px;
  max-width: 340px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:last-of-type {
    padding-top: 20px;
  }

  @media screen and (max-width: 420px) {
    max-width: 260px;
    margin: 0 auto;
    br {
      display: none;
    }
  }
`;

export const ListInputsStyle = styled.div<{ paddingRight: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  width: 100%;
  padding-right: ${(props) => props.paddingRight};

  @media screen and (max-width: 420px) {
    max-width: 250px;
  }
`;

export const ListInputsItemStyle = styled.div`
  width: 135px;

  @media screen and (max-width: 420px) {
    width: 110px;
  }
`;

export const StreetInputStyle = styled.div`
  width: 180px;

  @media screen and (max-width: 420px) {
    width: 160px;
  }
`;

export const StreetNumberStyle = styled.div`
  width: 90px;

  @media screen and (max-width: 420px) {
    width: 60px;
  }
`;

// Select component
export const SelectStyle = styled.select`
  margin: 10px 0;
  padding: 10px 0 10px 10px;
  border: 2px solid var(--greyColor);
  border-radius: 5px;
  font-size: 13px;
  color: var(--blackColor);
  cursor: pointer;
  width: 150px;

  @media screen and (max-width: 420px) {
    width: 125px;
  }
`;

// ValidError component
export const ValidErrorStyle = styled.h1`
  color: red;
  font-size: 12.5px;
  letter-spacing: 1.1px;
`;
