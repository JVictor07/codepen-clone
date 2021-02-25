import styled from "styled-components";

export const UIButton = styled.button`
  color: #fff;
  display: flex;
  font-size: 1rem;
  position: relative;
  padding: 10px 16px;
  border-radius: 4px;
  align-items: center;
  background: ${(props) => props.theme.colors.gray};

  svg {
    &,
    * {
      stroke: ${(props) => props.theme.colors.textColor};
    }
  }
`;
