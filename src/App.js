import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import EverythingPage from "./pages/Everything";
import TopHeadlinesPage from "./pages/TopHeadlines";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";

const HeaderWithRouter = withRouter(Header);

function App() {
  return (
    <>
      <HeaderWithRouter />
      <Container style={{ minHeight: "500px" }}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/everything" exact>
            <EverythingPage />
          </Route>
          <Route path="/top-headlines" exact>
            <TopHeadlinesPage />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
