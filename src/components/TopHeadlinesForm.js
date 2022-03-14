import ReactTagInput from "@pathofdev/react-tag-input";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import countries from "../store/countries.json";
import categories from "../store/categories.json";
import PropTypes from "prop-types";

function TopHeadlinesForm({ searchOptions, handleSearchOptions, handleOpen }) {
  const [q, setQ] = useState(searchOptions.q);
  const [exactMatch, setExactMatch] = useState(searchOptions.exactMatch);
  const [sources, setSources] = useState(searchOptions.sources);
  const [country, setCountry] = useState(searchOptions.country);
  const [category, setCategory] = useState(searchOptions.category);

  const submitHandler = (event) => {
    event.preventDefault();
    const result = {
      q,
      exactMatch,
      sources,
      country,
      category,
    };
    handleSearchOptions(result);
  };
  return (
    <>
      <Form className="my-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3 small">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter keywords or phrases"
            defaultValue={q}
            onChange={(event) => {
              setQ(event.target.value);
            }}
          />
          <Form.Check
            className="my-2"
            type="checkbox"
            label="Exact Search"
            checked={exactMatch}
            onChange={() => setExactMatch(!exactMatch)}
          />
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Sources</Form.Label>
          <ReactTagInput
            size="sm"
            placeholder="String of identifiers for the news sources or blogs you want headlines from"
            tags={sources}
            onChange={(newTags) => setSources(newTags)}
          />
          <small className="text-muted">
            Note: You can't mix this param with the country or category params
          </small>
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Country</Form.Label>
          <Form.Select
            disabled={sources && sources.length ? true : false}
            size="sm"
            defaultValue={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">None</option>
            {countries.map((country) => {
              return (
                <option key={country.code} value={country.code.toLowerCase()}>
                  {country.country}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Category</Form.Label>
          <Form.Select
            disabled={sources && sources.length ? true : false}
            size="sm"
            defaultValue={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">None</option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category.toLowerCase()}>
                  {category}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Row>
          <Col>
            <Button size="sm" className="w-100" variant="primary" type="submit">
              Search
            </Button>
          </Col>
          <Col>
            <Button
              size="sm"
              className="w-100"
              variant="danger"
              onClick={handleOpen}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

TopHeadlinesForm.propTypes = {
  searchOptions: PropTypes.object.isRequired,
  handleSearchOptions: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default TopHeadlinesForm;
