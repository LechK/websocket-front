import styled from "styled-components";

export const Header = styled.header`
  padding: 1em 0;
  height: 3em;
  background-color: transparent;
  /* border-bottom: 1px solid ${({ theme }) => theme.lightGrey}; */
  position: static;
  top: 0;
  width: 100%;
  z-index: 699;
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.medium};
  margin: 0 auto;

  height: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 45px;
  max-width: 100%;
`;
