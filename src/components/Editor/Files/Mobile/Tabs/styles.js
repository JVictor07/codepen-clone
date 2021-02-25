import styled from "styled-components";
import { TabList, Tab } from "@reach/tabs";

export const Tabs = styled(TabList)``;

export const TabsItem = styled(Tab)`
  font-size: 14px;
  padding: 8px 16px;
  border-bottom: none;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.darkGray};
  border-top: 2px solid ${(props) => props.theme.colors.activeGray};
  &[aria-selected="true"] {
    background: ${(props) => props.theme.colors.activeGray};
    border-top: 2px solid ${(props) => props.theme.colors.lightGray};
  }
`;
