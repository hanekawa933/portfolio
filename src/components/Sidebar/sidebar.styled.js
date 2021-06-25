import styled from "styled-components";
import { Link as LogoLink } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

export const NavSidebar = styled.aside`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #061020;
  padding: 40px 30px;

  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-100%)"};

  transition: 0.3s ease-in;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const Logo = styled(LogoLink)`
  color: var(--textColor);
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 15px;
`;

export const Mobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMobile = styled.div`
  width: 40px;
  height: 50px;
  cursor: pointer;
`;

export const Svg = styled.object`
  width: 100%;
  height: 100%;
  cursor: pointer;
  filter: invert(58%) sepia(1%) saturate(6956%) hue-rotate(334deg)
    brightness(113%) contrast(116%);
`;

export const Nav = styled.nav`
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0 25px;
`;

export const NavbarLink = styled(NavLink)`
  color: var(--textColor);
  font-size: 1.3rem;
`;

export const Socials = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: var(--secondaryColor);
  border-radius: 20px;
  padding: 5px;
  margin-top: 50px;
`;

export const LogoIcon = styled.img`
  width: 25px;
  margin: 3px 10px 0 10px;

  background: ${({ git }) => (git ? "white" : "transparent")};
  border-radius: 50px;
`;
