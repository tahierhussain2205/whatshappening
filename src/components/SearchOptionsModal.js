import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

function SearchOptionsModal({
  openSearchOptionsModal,
  handleSearchOptionModal,
}) {
  return (
    <Modal
      size="lg"
      show={openSearchOptionsModal}
      onHide={handleSearchOptionModal}
    >
      <Modal.Body>Modal</Modal.Body>
    </Modal>
  );
}

SearchOptionsModal.propTypes = {
  openSearchOptionsModal: PropTypes.bool.isRequired,
  handleSearchOptionModal: PropTypes.func.isRequired,
};

export default SearchOptionsModal;
