import { Nav, Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">what's happening?</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
