import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  display: flex;
  flex-direction: ${(props) =>
    props.navDirection === "row" ? "row" : "column"};
`;

export const StyledLink = styled(Link)`
  color: ${(props) =>
    props.color === "dark" ? props.theme.dark : props.theme.light};
  text-decoration: none;
  font-weight: bold;
  padding: 1em 2em;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.5em 0.5em;
  }
  &:hover {
    color: ${(props) =>
      props.color === "dark" ? props.theme.grey : props.theme.dark};
  }
`;
