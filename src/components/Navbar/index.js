import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
            <NavMenu>
                <NavLink to="/Homepage" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Docs" activeStyle>
                    Docs
                </NavLink>

            </NavMenu>
           </Nav>
        </>
    );
};
export default Navbar;
