import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import SearchOptionsModal from "../modals/SearchOptionsModal";
import PropTypes from "prop-types";
import NewsCards from "../components/NewsCards";
import NoResults from "../components/NoResults";

function NewsLayout({
  searchType,
  searchOptions,
  results,
  handleSearchOptions,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Container className="my-3">
        <Container className="p-0">
          <Button inline size="sm" variant="primary" onClick={handleOpen}>
            Modify Search Query
          </Button>
        </Container>
        {results.length ? <NewsCards results={results} /> : <NoResults />}
      </Container>
      <SearchOptionsModal
        searchType={searchType}
        searchOptions={searchOptions}
        handleSearchOptions={handleSearchOptions}
        open={open}
        handleOpen={handleOpen}
      />
    </>
  );
}

NewsLayout.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchOptions: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  handleSearchOptions: PropTypes.func.isRequired,
};

export default NewsLayout;
