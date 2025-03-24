import React from "react";
import styled from "styled-components";
const StylesButton = (variant) => {
  switch (variant) {
    case "add": {
      return {
        background: "rgb(228, 0, 122)",
      };
    }
    case "update": {
      return {
        width: "75px",
        height: "35px",
        fontSize: "12px",
        background: " rgb(252, 88, 208)",
      };
    }
    case "delete": {
      return {
        width: "70px",
        height: "35px",
        fontSize: "12px",
        background: " rgb(252, 88, 208)",
      };
    }
    case "send": {
      return {
        width: "350px",
        height: "40px",
        fontSize: "15px",
        background: "darkblue",
        borderRadius: "8px",
      };
    }
    case "YesNo": {
      return {
        background: "rgb(72, 171, 65)",
        boxShadow: "1px 1px 1.5px 1px rgb(175, 174, 174)",
      };
    }
  }
};

export const Button = ({ children, onClick, type, variant, ...rest }) => {
  return (
    <StyledButton onClick={onClick} type={type} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  ${(props) => StylesButton(props.variant)}
`;
