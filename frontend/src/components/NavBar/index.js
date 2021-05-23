import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles.css";
export default function NavigationBar() {
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        collapseOnSelect
        className="mynav navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "#000 !important" }}
      >
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/jordiespinoza/image/upload/v1621735707/PNbn_lkus8y.png"
            width="170"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navigationBar" />
        <Navbar.Collapse id="navigationBar">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <i className="fas fa-home"></i> Inicio
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/maps">
              <Nav.Link>Mapa</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
