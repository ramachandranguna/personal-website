import styled from "styled-components";
import {
  color,
  space,
  typography,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  layout,
} from "styled-system";

interface TextProps
  extends ColorProps,
    SpaceProps,
    TypographyProps,
    LayoutProps {
  as?: string;
}

export const Text: React.FC<TextProps> = styled.div<TextProps>`
  ${color}
  ${space}
${typography}
${layout}
::selection {
    color: white;
    background: ${({ theme }) => {
      return theme.colors.highlight;
    }};
  }
`;

export default Text;
