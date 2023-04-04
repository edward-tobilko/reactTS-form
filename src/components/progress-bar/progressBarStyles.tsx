import styled from "styled-components";

// ProgressBar component
export const ProgressBarStyle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 15px 0 30px;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;
