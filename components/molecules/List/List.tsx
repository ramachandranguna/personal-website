import styled from "styled-components";
import {
  SpaceProps,
  space,
  ColorProps,
  color,
  layout,
  LayoutProps,
} from "styled-system";
interface ListProps extends SpaceProps, ColorProps, LayoutProps {
  children?: React.ReactNode;
  as?: any;
}

const StyledList = styled.li<ListProps>`
  list-style: none;
  ${space}
  ${color}
  ${layout}
`;

export const List: React.FC<ListProps> = ({
  children,
  as = "ul",
  ...props
}: ListProps) => (
  <StyledList as={as} {...props}>
    {children}
  </StyledList>
);
