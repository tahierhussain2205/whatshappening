import { Modal } from "react-bootstrap";
import "@pathofdev/react-tag-input/build/index.css";
import PropTypes from "prop-types";
import EverythingForm from "../components/EverythingForm";
import TopHeadlinesForm from "../components/TopHeadlinesForm";

function SearchOptionsModal({
  searchType,
  searchOptions,
  handleSearchOptions,
  open,
  handleOpen,
}) {
  return (
    <Modal size="lg" show={open} onHide={handleOpen}>
      <Modal.Body className="p-4">
        {searchType == "everything" ? (
          <EverythingForm
            searchOptions={searchOptions}
            handleSearchOptions={handleSearchOptions}
            handleOpen={handleOpen}
          />
        ) : (
          <TopHeadlinesForm
            searchOptions={searchOptions}
            handleSearchOptions={handleSearchOptions}
            handleOpen={handleOpen}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

SearchOptionsModal.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchOptions: PropTypes.object.isRequired,
  handleSearchOptions: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default SearchOptionsModal;
