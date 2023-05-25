import React, { useState } from "react";
import "./Header.css";
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
const Header = () => {
  const [show, setShow] = useState(true);
  return (
    <header>
      <MDBContainer fluid>
        <MDBNavbar expand="md">
          <MDBNavbarBrand>
            <h2>BOOKS STORE</h2>
          </MDBNavbarBrand>
          <MDBNavbarToggler>
            <MDBIcon icon="bars" fas onClick={() => setShow(!show)} />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={show}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="d-flex justify-content-around align-items-center gap-4"
            >
              <MDBNavbarItem>
                <MDBNavbarLink>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Books</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    </header>
  );
};

export default Header;
