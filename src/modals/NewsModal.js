import { Col, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NewsModal({ open, handleOpen, result }) {
  const getDate = (date) => {
    var date = new Date(date);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  return (
    <Modal size="lg" show={open} onHide={handleOpen}>
      {result.urlToImage && (
        <img
          src={result.urlToImage}
          style={{ width: "100%", height: "30rem", objectFit: "cover" }}
        />
      )}
      <Modal.Header>
        <Modal.Title>
          <Link onClick={() => window.open(result.url)}>{result.title}</Link>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col>
            <small>
              <strong>Author: </strong>
              {result.author}
            </small>
          </Col>
          <Col>
            <small>
              <strong>Published At: </strong>
              {getDate(result.publishedAt)}
            </small>
          </Col>
          <Col>
            <small>
              <strong>Source: </strong>
              {result.source.name}
            </small>
          </Col>
        </Row>
        <p>
          <strong>Description: </strong>
          {result.description}
        </p>
        <p>
          <strong>Content: </strong>
          {result.content}
        </p>
      </Modal.Body>
    </Modal>
  );
}

NewsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired,
};

export default NewsModal;