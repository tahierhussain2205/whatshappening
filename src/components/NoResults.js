import { Container } from "react-bootstrap";

function NoResults() {
  return (
    <Container className="px-0 py-5 text-center">
      <h3>
        Sorry, we couldn't find any results. Try modifying the search query.
      </h3>
    </Container>
  );
}

export default NoResults;
