import React from "react";
import * as S from "./Navigation.style";
import { navigationLinks } from "../../../utils/navigationLinks.js";

function Navigation({ navDirection, color }) {
  return (
    <S.Navigation navDirection={navDirection}>
      {navigationLinks &&
        navigationLinks.map((link) => {
          return (
            <S.StyledLink color={color} key={link.to} to={`/${link.to}`}>
              {link.name}
            </S.StyledLink>
          );
        })}
    </S.Navigation>
  );
}

export default Navigation;
