import { Container, Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Container className="p-4 text-center">
      <Spinner animation="border" variant="primary" />
    </Container>
  );
}

export default Loader;
