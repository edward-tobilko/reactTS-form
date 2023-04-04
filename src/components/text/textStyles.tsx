import styled from "styled-components";

// Title component
export const TitleStyle = styled.h1<{ textAlign: string }>`
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 20px;
  line-height: 23px;
  text-align: ${(props) => props.textAlign};
  span {
    color: var(--errorColor);
  }

  @media screen and (max-width: 420px) {
    font-size: 15px;
    line-height: 19px;
    padding-bottom: 20px !important;
  }
`;

// Subtitle component
type SubTitleStyleType = {
  pl: string;
  fs: string;
};

export const SubTitleStyle = styled.h2<SubTitleStyleType>`
  padding-left: ${(props) => props.pl};
  font-size: ${(props) => props.fs};
`;

// Наслідування комп. для нового стилю комп.
export const NewSubTitleStyle = styled(SubTitleStyle)<{
  fw: string;
}>`
  font-weight: ${(props) => props.fw};
`;
