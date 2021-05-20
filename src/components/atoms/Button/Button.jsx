import React from "react";
import * as S from "./Button.style";

function checkLoading(loading, children) {
  if (loading === true) {
    return (
      <>
        <i className="fa fa-spinner fa-spin"></i> Loading
      </>
    );
  } else {
    return children;
  }
}

function Button({ children, handleClick, color, type, loading }) {
  return (
    <S.Button onClick={handleClick} color={color} type={type}>
      {checkLoading(loading, children)}
    </S.Button>
  );
}

export default Button;
