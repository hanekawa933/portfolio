import React, { useState } from "react";
import Sidebar from "../Sidebar";

import {
  Header,
  Svg,
  NavMobile,
  Nav,
  NavbarLink,
  Socials,
  Logo,
  LogoIcon,
  Mobile,
} from "./navbar.styled";

import githubIcon from "../../assets/img/github.ico";
import instagramIcon from "../../assets/img/instagram.ico";
import linkedinIcon from "../../assets/img/linkedin.ico";
import hamburger from "../../assets/svg/hamburger.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <Header>
      <Mobile>
        <NavMobile onClick={onClick}>
          <Svg data={hamburger} type="image/svg+xml"></Svg>
        </NavMobile>
        <Logo>HanekawA</Logo>
      </Mobile>
      <Nav>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>About</NavbarLink>
        <NavbarLink>Skills</NavbarLink>
        <NavbarLink>Work</NavbarLink>
        <NavbarLink>Contact</NavbarLink>
      </Nav>
      <Socials>
        <NavbarLink>
          <LogoIcon src={githubIcon} git={true} />
        </NavbarLink>
        <NavbarLink>
          <LogoIcon src={instagramIcon} />
        </NavbarLink>
        <NavbarLink>
          <LogoIcon src={linkedinIcon} />
        </NavbarLink>
      </Socials>
      <Sidebar
        instagram={instagramIcon}
        github={githubIcon}
        linkedin={linkedinIcon}
        active={active}
      />
    </Header>
  );
};

export default Navbar;
