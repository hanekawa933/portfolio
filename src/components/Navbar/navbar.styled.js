import styled from "styled-components";
import { Link as LogoLink } from "react-router-dom";
import { Link as NavLink } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  margin: 0 auto;
  padding: 40px 30px;
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

  @media (min-width: 320px) {
    /* smartphones, iPhone, portrait 480x320 phones */
  }
  @media (min-width: 481px) {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  }
  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  }
  @media (min-width: 961px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    display: none;
    /* big landscape tablets, laptops, and desktops */
  }
`;

export const Svg = styled.object`
  width: 100%;
  height: 100%;
  cursor: pointer;
  filter: invert(75%) sepia(1%) saturate(6956%) hue-rotate(334deg)
    brightness(113%) contrast(116%);
`;

export const Logo = styled(LogoLink)`
  font-size: 1.5rem;
  color: var(--textColor);
  margin-left: 15px;
  font-weight: 700;

  :hover {
    color: #bababa;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: var(--textColor);
  font-size: 1.1rem;

  :hover {
    color: #bbb;
  }
`;

export const LogoIcon = styled.img`
  width: 25px;
  margin: 0 4px;
  background: ${({ git }) => (git ? "white" : "transparent")};
  border-radius: 50px;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 320px) {
    /* smartphones, iPhone, portrait 480x320 phones */
  }
  @media (min-width: 481px) {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  }
  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  }
  @media (min-width: 961px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    /* big landscape tablets, laptops, and desktops */
  }
`;

export const Socials = styled.div`
  display: none;

  @media (min-width: 320px) {
    /* smartphones, iPhone, portrait 480x320 phones */
  }
  @media (min-width: 481px) {
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  }
  @media (min-width: 641px) {
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  }
  @media (min-width: 961px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    display: flex;
    background: var(--secondaryColor);
    padding: 5px 20px;
    border-radius: 20px;
    /* big landscape tablets, laptops, and desktops */
  }
`;
