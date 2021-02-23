import React from "react";
import Ink from "react-ink";
import PropTypes from "prop-types";

import * as S from "./styles";

const UIButton = ({ text, children, type, onClick, disabled }) => {
  return (
    <S.UIButton
      onClick={onClick}
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
    >
      {text || children}
      <Ink />
    </S.UIButton>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit"]),
};

UIButton.defaultProps = {
  text: "",
  onClick: null,
  children: null,
  type: "button",
  disabled: null,
};

export default UIButton;
