import { NavLink } from "react-router-dom";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { SuccessCreatedAccountStyle, WrapperStyle } from "./pagesStyles";

import { Title } from "../components/text/Title";
import { Subtitle } from "../components/text/Subtitle";

const SuccessCreatedAccount = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <WrapperStyle padding={"20px 50px 40px 30px"}>
        <Title style={{ fontSize: 21 }}>
          Success! Your Account is Created.
        </Title>

        <Subtitle pl={"0"} fs={"17px"}>
          Please check your email for next steps. <br /> Your phone number
          should be textable in a few minutes.
        </Subtitle>

        <SuccessCreatedAccountStyle>
          <svg fill="#ea6422" width="90" height="90" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
          </svg>
          <h3>Didn't receive an email?</h3>
          <h3>
            Check your SPAM folder <br /> or <br />
            <NavLink to={`/`}>Resend Email</NavLink>
          </h3>
        </SuccessCreatedAccountStyle>
      </WrapperStyle>

      <Confetti
        width={width}
        height={height}
        gravity={0.1}
        numberOfPieces={250}
      />
    </>
  );
};

export default SuccessCreatedAccount;
