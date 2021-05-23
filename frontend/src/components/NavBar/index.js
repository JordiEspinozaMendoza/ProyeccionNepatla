import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function NavigationBar() {
  return (
    <>
      <Navbar
        style={{backgroundColor:"#000 !important"}}
        fixed="top"
        expand="lg"
        collapseOnSelect
        className="navbar navbar-expand-lg navbar-dark bg-dark"
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

            <LinkContainer to="/especies">
              <Nav.Link>
                {" "}
                <i className="fas fa-store"></i> Especies
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/maps">
              <Nav.Link>
                {" "}
                <i className="fas fa-store"></i> Mapa
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
