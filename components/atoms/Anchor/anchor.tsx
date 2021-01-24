import Link from "next/link";
import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
} from "styled-system";

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    SpaceProps,
    LayoutProps,
    ColorProps,
    BackgroundProps,
    BorderProps,
    TypographyProps {
  color?: any;
  as?: any;
  children?: React.ReactNode;
}

const StyledAnchor = styled.a<AnchorProps>`
  ${space}
  ${color}
    ${layout}
    ${background}
    ${border}
    ${typography}
`;

export const Anchor = ({ children, href = "#", ...props }: AnchorProps) => {
  return (
    <Link href={href as any} passHref>
      <StyledAnchor as="a" {...props}>
        {children}
      </StyledAnchor>
    </Link>
  );
};
