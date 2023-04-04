import { Routes, Route } from "react-router-dom";

import ProgressBar from "./components/progress-bar/ProgressBar";
import CallMe from "./pages/CallMe";
import CheckVerification from "./pages/CheckVerification";
import ConfirmAccountName from "./pages/ConfirmAccountName";
import CreateAccount from "./pages/CreateAccount";
import ReviewInfo from "./pages/ReviewInfo";
import VerifyNumber from "./pages/VerifyNumber";
import SuccessCreatedAccount from "./pages/SuccessCreatedAccount";
import SuccessPhone from "./pages/SuccessPhone";
import {
  AppFormHeaderBtnStyle,
  AppFormHeaderStyle,
  AppFormStyle,
  AppStyle,
} from "./appStyles";

const App = () => {
  return (
    <>
      <ProgressBar />

      <AppStyle>
        <AppFormStyle>
          <AppFormHeaderStyle>
            <AppFormHeaderBtnStyle></AppFormHeaderBtnStyle>
            <AppFormHeaderBtnStyle></AppFormHeaderBtnStyle>
            <AppFormHeaderBtnStyle></AppFormHeaderBtnStyle>
          </AppFormHeaderStyle>

          <Routes>
            <Route path="/" element={<VerifyNumber />} />
            <Route path="/call-me" element={<CallMe />} />
            <Route path="/check-verification" element={<CheckVerification />} />
            <Route path="/success-phone" element={<SuccessPhone />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route
              path="/confirm-account-name"
              element={<ConfirmAccountName />}
            />
            <Route path="/review-info" element={<ReviewInfo />} />
            <Route
              path="/success-created-account"
              element={<SuccessCreatedAccount />}
            />
          </Routes>
        </AppFormStyle>
      </AppStyle>
    </>
  );
};

export default App;
