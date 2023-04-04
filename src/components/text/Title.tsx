import { TitleStyle } from "./textStyles";

export const Title = (props: React.HTMLAttributes<HTMLElement>) => {
  return <TitleStyle textAlign={"left"} {...props} />;
};
