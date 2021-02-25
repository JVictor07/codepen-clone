import styled from "styled-components";

export const EditorFiles = styled.div`
  height: 55vh;
  display: flex;
  max-height: 55%;
  padding: 0 10px;
  align-items: center;
  background: ${(props) => props.theme.colors.darkGray};

  @media screen and (max-width: 1020px) {
    padding: 0;
  }
`;
