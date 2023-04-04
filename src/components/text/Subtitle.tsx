import { SubTitleStyle } from "./textStyles";

type SubtitleType = {
  children: React.ReactNode;
  pl: string;
  fs: string;
};

export const Subtitle = (props: SubtitleType) => {
  return <SubTitleStyle {...props} />;
};
