import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { flexbox, FlexboxProps } from "styled-system";

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex: React.FC<FlexProps> = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
