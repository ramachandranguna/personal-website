import styled from "styled-components";
import { SpaceProps, space, ColorProps, color } from "styled-system";
interface ListProps extends SpaceProps, ColorProps {
  children?: React.ReactNode;
  as?: any;
}

const StyledList = styled.li<ListProps>`
  ${space}
  ${color}
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
