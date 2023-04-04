import styled from "styled-components";

export const BtnsBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 420px) {
    max-width: 260px;
    margin: 0 auto;
  }
`;

export const NextButtonStyle = styled.button<{ disabled: boolean }>`
  width: 70%;
  background-color: var(--orangeColor);
  color: var(--whiteColor);
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  &:hover {
    filter: brightness(90%);
  }
  &:first-of-type {
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    &:first-of-type {
      max-width: 264px;
      width: 100%;
    }
  }
`;

export const PrevButtonStyle = styled.button`
  width: 20%;
  background-color: var(--orangeColor);
  color: var(--whiteColor);
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:disabled {
    opacity: 0.5;
  }
`;
