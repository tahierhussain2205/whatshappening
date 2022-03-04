import { Nav, Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function Header({ handleSearchOptionModal }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">what's happening?</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={handleSearchOptionModal}>search here...</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  handleSearchOptionModal: PropTypes.bool.isRequired,
};

export default Header;
