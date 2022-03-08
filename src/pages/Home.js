import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  return (
    <Container className="py-5 text-center">
      <Card className="p-5" style={{ height: "25rem" }}>
        <h1>Hi there!</h1>
        <h5>Thanks for taking time to look into my project.</h5>
        <h5>
          Over here, there are two endpoints from which you can search for
          articles.
          <br /> <strong>Everything</strong> - search every article published by
          over 80,000 different sources large and small in the last 4 years.
          This endpoint is ideal for news analysis and article discovery. <br />
          <strong>Top Headlines</strong> - returns breaking news headlines for
          countries, categories, and singular publishers. This is perfect for
          use with news tickers or anywhere you want to use live up-to-date news
          headlines.
        </h5>
        <Row className="mt-5">
          <Col>
            <Button
              variant="primary"
              size="lg"
              className="w-100"
              onClick={() => history.replace("/everything")}
            >
              Everything
            </Button>
          </Col>
          <Col>
            <Button
              variant="success"
              size="lg"
              className="w-100"
              onClick={() => history.replace("/top-headlines")}
            >
              Top Headlines
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default HomePage;
