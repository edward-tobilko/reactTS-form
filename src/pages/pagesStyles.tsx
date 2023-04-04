import styled from "styled-components";

// CallMe component
export const WrapperStyle = styled.div<{ padding: string }>`
  padding: ${(props) => props.padding};

  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`;

// CheckVerification component
export const CheckVerificationPhoneStyle = styled.div`
  padding: 20px 5px 40px 5px;
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
`;

export const VerificationCheckboxStyle = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
`;

export const VerivicationButtonStyle = styled.div`
  max-width: 250px;
  padding: 30px 0;
  margin: 0 auto;
`;

export const VerivicationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const VerificationLinkStyle = styled.a`
  color: var(--blackColor);
  font-size: 14px;
  font-weight: 500;
`;

// SuccessPhone component
export const SuccessPhoneStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  span {
    color: var(--greenColor);
    font-size: 23px;
    font-weight: 700;
    padding-left: 15px;
  }
`;

// CreateAccount component
export const CreateAccountBusinessPhoneStyle = styled.div`
  max-width: 230px;
  width: 100%;
  margin: 30px auto;
  text-align: center;
`;

export const CreateAccountBusinessPhoneTitleStyle = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 10px;
`;

export const CreateAccountBusinessPhoneNumberStyle = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

// ReviewInfo component
export const ReviewInfoListStyle = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding-top: 15px;
  font-weight: 500;
`;

// SuccessCreatedAccount component
export const SuccessCreatedAccountStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;

  h3 {
    padding-top: 20px;
    text-align: center;
    font-weight: 500;
    &:last-child {
      padding-bottom: 20px;
    }
    a {
      color: var(--blackColor);
    }
  }
`;

// ConfirmAccountName component
export const ConfirmAccountStyle = styled.div`
  width: 320px;
  margin-top: 20px;

  @media screen and (max-width: 420px) {
    width: 260px;
    margin: 20px auto;
  }
`;
