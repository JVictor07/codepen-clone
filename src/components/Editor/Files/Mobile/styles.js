import styled, { css } from "styled-components";
import { TabPanels, Tabs } from "@reach/tabs";

export const EditorFilesMobile = styled(Tabs)`
  height: 55vh;
  max-height: 55%;
  background: ${(props) => props.theme.colors.darkGray};
`;

export const EditorFilesMobilePanels = styled(TabPanels)`
  width: 100%;
  height: calc(100% - 40px);
`;

export const HideElement = styled.div`
  height: 100%;
  width: 100%;
  ${({ hideElement }) =>
    hideElement &&
    css`
      display: none;
    `};
`;
