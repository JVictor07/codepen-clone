import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.dark};
  * {
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    h1 {
      font-weight: 500;
      font-size: 1.3rem;
    }
    span {
      font-size: 0.9rem;
      color: ${(props) => props.theme.colors.secondaryTextColor};
    }
  }
`;
