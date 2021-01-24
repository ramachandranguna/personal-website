import styled from "styled-components";
import {
  space,
  color,
  layout,
  grid,
  GridProps,
  LayoutProps,
  ColorProps,
  SpaceProps,
  position,
  PositionProps,
} from "styled-system";

export interface BoxProps
  extends LayoutProps,
    GridProps,
    ColorProps,
    SpaceProps,
    PositionProps {
  as?: any;
  ref?: any;
}

export const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  position: relative;
  ${layout}
  ${grid}
  ${space}
  ${color}
  ${position}
`;

export default Box;
