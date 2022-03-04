import { Modal, Tabs, Tab, Form, Button, Row, Col } from "react-bootstrap";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import PropTypes from "prop-types";
import { useState } from "react";
import languages from "./languages.json";
import countries from "./countries.json";
import categories from "./categories.json";

function SearchOptionsModal({
  openSearchOptionsModal,
  handleSearchOptionModal,
}) {
  const [tags, setTags] = useState(["example tag"]);

  return (
    <Modal
      size="lg"
      show={openSearchOptionsModal}
      onHide={handleSearchOptionModal}
    >
      <Modal.Body className="p-4">
        <Tabs defaultActiveKey="everything" className="mb-3">
          <Tab eventKey="everything" title="Everything">
            <Form className="my-3">
              <Form.Group className="mb-3 small">
                <Form.Label>Search</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="Keywords to search for in the article title and
                  body"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Search In</Form.Label>
                <Form.Check
                  className="mx-2"
                  inline
                  type="checkbox"
                  label="Title"
                />
                <Form.Check
                  className="mx-2"
                  inline
                  type="checkbox"
                  label="Description"
                />
                <Form.Check
                  className="mx-2"
                  inline
                  type="checkbox"
                  label="Content"
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Sources</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="String of identifiers for the news sources or blogs you want headlines from"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Domains</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="String of domains to restrict the search to"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Exclude Domains</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="String of domains to remove from the results"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>From Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>To Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Language</Form.Label>
                <Form.Select size="sm">
                  {languages.map((language) => {
                    return (
                      <option key={language.code} value={language.code}>
                        {language.language}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Sort By</Form.Label>
                <Form.Check
                  className="mx-2"
                  inline
                  label="Relevancy"
                  name="group1"
                  type="radio"
                  id="inline-radio-1"
                />
                <Form.Check
                  className="mx-2"
                  inline
                  label="Popularity"
                  name="group1"
                  type="radio"
                  id="inline-radio-2"
                />
                <Form.Check
                  className="mx-2"
                  inline
                  label="Published At"
                  type="radio"
                  id="inline-radio-3"
                />
              </Form.Group>
              <Row>
                <Col>
                  <Button className="w-100" variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
                <Col>
                  <Button className="w-100" variant="danger">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab>
          <Tab eventKey="topheadlines" title="Top Headlines">
            <Form className="my-3">
              <Form.Group className="mb-3 small">
                <Form.Label>Search</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="Keywords to search for in the article title and
                  body"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Sources</Form.Label>
                <ReactTagInput
                  size="sm"
                  placeholder="String of identifiers for the news sources or blogs you want headlines from"
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                />
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Country</Form.Label>
                <Form.Select size="sm">
                  {countries.map((country) => {
                    return (
                      <option key={country.code} value={country.code}>
                        {country.country}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 small">
                <Form.Label>Category</Form.Label>
                <Form.Select size="sm">
                  {categories.map((category, categoryIndex) => {
                    return (
                      <option key={categoryIndex} value={category}>
                        {category}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <Row>
                <Col>
                  <Button className="w-100" variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
                <Col>
                  <Button className="w-100" variant="danger">
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
}

SearchOptionsModal.propTypes = {
  openSearchOptionsModal: PropTypes.bool.isRequired,
  handleSearchOptionModal: PropTypes.func.isRequired,
};

export default SearchOptionsModal;
