import ReactTagInput from "@pathofdev/react-tag-input";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import languages from "../store/languages.json";
import PropTypes from "prop-types";

function EverythingForm({ searchOptions, handleSearchOptions, handleOpen }) {
  const [q, setQ] = useState(searchOptions.q);
  const [exactMatch, setExactMatch] = useState(searchOptions.exactMatch);
  const [searchInTitle, setSearchInTitle] = useState(
    searchOptions.searchIn.title
  );
  const [searchInDescription, setSearchInDescription] = useState(
    searchOptions.searchIn.description
  );
  const [searchInContent, setSearchInContent] = useState(
    searchOptions.searchIn.content
  );
  const [sources, setSources] = useState(searchOptions.sources);
  const [domains, setDomains] = useState(searchOptions.domains);
  const [excludeDomains, setExcludeDomains] = useState(
    searchOptions.excludeDomains
  );
  const [from, setFrom] = useState(searchOptions.from);
  const [to, setTo] = useState(searchOptions.to);
  const [language, setLanguage] = useState(searchOptions.language);
  const [sortBy, setSortBy] = useState(searchOptions.sortBy);

  const submitHandler = (event) => {
    event.preventDefault();
    const result = {
      q,
      exactMatch,
      searchIn: {
        title: searchInTitle,
        description: searchInDescription,
        content: searchInContent,
      },
      sources,
      domains,
      excludeDomains,
      from,
      to,
      language,
      sortBy,
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
          <Form.Label>Search In</Form.Label>
          <Form.Check
            className="mx-2"
            inline
            type="checkbox"
            label="Title"
            checked={searchInTitle}
            onChange={() => setSearchInTitle(!searchInTitle)}
          />
          <Form.Check
            className="mx-2"
            inline
            type="checkbox"
            label="Description"
            checked={searchInDescription}
            onChange={() => setSearchInDescription(!searchInDescription)}
          />
          <Form.Check
            className="mx-2"
            inline
            type="checkbox"
            label="Content"
            checked={searchInContent}
            onChange={() => setSearchInContent(!searchInContent)}
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
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Domains</Form.Label>
          <ReactTagInput
            size="sm"
            placeholder="String of domains to restrict the search to"
            tags={domains}
            onChange={(newTags) => setDomains(newTags)}
          />
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Exclude Domains</Form.Label>
          <ReactTagInput
            size="sm"
            placeholder="String of domains to remove from the results"
            tags={excludeDomains}
            onChange={(newTags) => setExcludeDomains(newTags)}
          />
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>From Date</Form.Label>
          <Form.Control
            type="date"
            defaultValue={from}
            onChange={(event) => setFrom(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            type="date"
            defaultValue={to}
            onChange={(event) => setTo(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 small">
          <Form.Label>Language</Form.Label>
          <Form.Select
            size="sm"
            defaultValue={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
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
            checked={sortBy === "relevancy"}
            onChange={() => setSortBy("relevancy")}
          />
          <Form.Check
            className="mx-2"
            inline
            label="Popularity"
            name="group1"
            type="radio"
            id="inline-radio-2"
            checked={sortBy === "popularity"}
            onChange={() => setSortBy("popularity")}
          />
          <Form.Check
            className="mx-2"
            inline
            label="Published At"
            type="radio"
            id="inline-radio-3"
            checked={sortBy === "publishedAt"}
            onChange={() => setSortBy("publishedAt")}
          />
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

EverythingForm.propTypes = {
  searchOptions: PropTypes.object.isRequired,
  handleSearchOptions: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default EverythingForm;
