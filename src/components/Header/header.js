import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  background-color: #1e633f;
  color: #fff;
  width: 100%;
  padding: 12px 100px;
`;
export const HeaderRoutes = styled.ul`
  all: unset;
  list-style-type: none;
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-right: 70px;
`;

export const HeaderCartAndUser = styled.ul`
  all: unset;
  list-style-type: none;
  display: flex;
  width: 50%;
  //   flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 80px;
  align-items: center;
`;
