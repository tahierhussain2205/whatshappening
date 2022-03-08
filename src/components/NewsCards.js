import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { MDBRow } from "mdb-react-ui-kit";
import NewsCard from "./NewsCard";

function NewsCards({ results }) {
  return (
    <Container className="mt-3 p-0 pb-4">
      <MDBRow className="row-cols-1 row-cols-md-4 g-3">
        {results.map((result, index) => {
          return <NewsCard key={index} result={result} />;
        })}
      </MDBRow>
    </Container>
  );
}

NewsCards.propTypes = {
  results: PropTypes.array.isRequired,
};

export default NewsCards;
