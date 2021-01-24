import styled from "styled-components";
import { SpaceProps, space, ColorProps, color } from "styled-system";
export interface ListItemProps extends SpaceProps, ColorProps {
  children?: React.ReactNode;
  as?: any;
}

const StyledItem = styled.li<ListItemProps>`
  ${space}
  ${color}
`;

export const ListItem: React.FC<ListItemProps> = ({
  children,
  as = "li",
  ...props
}: ListItemProps) => (
  <StyledItem as={as} {...props}>
    {children}
  </StyledItem>
);
