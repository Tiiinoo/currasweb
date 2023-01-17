import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../data/cart.png";

export const NavBar = () => {
  return (
    <>
      <NavbarBs>
        <Container className="bg-white shadow-sm mb-3">
          <Nav className="me-auto">
            {/*this push something on the same level to the right (the shopping)*/}
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/policies" as={NavLink}>
              Policies
            </Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>
              Contact
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "3rem", height: "3rem", postion: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <img scr={Cart}></img>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};
