import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};
  border-radius: 5px;
  padding: 0.5em 2em;
  border: none;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
    color: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.color
        : props.theme.secondary.hover.color};
    font-weight: bolder;
  }
`;
