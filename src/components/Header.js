import { Nav, Navbar, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#3e573b" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">what's happening?</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link onClick={() => history.replace("/everything")}>
              Everything
            </Nav.Link>
            <Nav.Link onClick={() => history.replace("/top-headlines")}>
              Top Headlines
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
