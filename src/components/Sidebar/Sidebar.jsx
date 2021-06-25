import React, { useState } from "react";
import {
  NavSidebar,
  Logo,
  Nav,
  Socials,
  NavbarLink,
  LogoIcon,
  Mobile,
  NavMobile,
  Svg,
} from "./sidebar.styled";

import close from "../../assets/svg/close.svg";

const Sidebar = ({ instagram, github, linkedin, active }) => {
  const [hide, setHide] = useState(true);

  const closeSidebar = () => {
    setHide(!hide);
  };

  return (
    <NavSidebar active={active ? hide : !hide}>
      <Mobile>
        <NavMobile onClick={closeSidebar}>
          <Svg data={close} type="image/svg+xml"></Svg>
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
          <LogoIcon src={github} git={true} />
        </NavbarLink>
        <NavbarLink>
          <LogoIcon src={instagram} />
        </NavbarLink>
        <NavbarLink>
          <LogoIcon src={linkedin} />
        </NavbarLink>
      </Socials>
    </NavSidebar>
  );
};

export default Sidebar;
