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
    return <>
        <Navbar
            fixed="top"
            expand="lg"
            collapseOnSelect
            className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Brand>Proyeccion Nepatla</Navbar.Brand>
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

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
}