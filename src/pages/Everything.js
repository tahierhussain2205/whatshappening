import { useEffect, useState } from "react";
import NewsLayout from "../layout/NewsLayout";
import axios from "axios";
import Loader from "../components/Loader";

function EverythingPage() {
  const initialSearchOptions = {
    q: "Russia Ukraine",
    exactMatch: false,
    searchIn: {
      title: true,
      description: true,
      content: true,
    },
    sources: [],
    domains: [],
    excludeDomains: [],
    from: "",
    to: "",
    language: "",
    sortBy: "",
  };
  const [searchOptions, setSearchOptions] = useState(initialSearchOptions);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSearchOptions(searchOptions, true);
  }, []);

  const handleSearchOptions = (newSearchOptions, initialReq = false) => {
    setIsLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    let queryParams = "";
    const query = newSearchOptions.exactMatch
      ? '"' + newSearchOptions.q + '"'
      : newSearchOptions.q;

    if (query && query.length) {
      queryParams += "q=" + query + "&";
    }

    let searchIn = [];
    Object.keys(newSearchOptions.searchIn).map((key) => {
      if (newSearchOptions.searchIn[key]) {
        searchIn.push(key);
      }
    });
    if (searchIn && searchIn.length) {
      queryParams += "searchIn=" + searchIn + "&";
    }

    if (newSearchOptions.sources.length) {
      queryParams += "sources=" + newSearchOptions.sources.join(",") + "&";
    }

    if (newSearchOptions.domains.length) {
      queryParams += "domains=" + newSearchOptions.domains.join(",") + "&";
    }

    if (newSearchOptions.excludeDomains.length) {
      queryParams +=
        "excludeDomains=" + newSearchOptions.excludeDomains.join(",") + "&";
    }

    if (newSearchOptions.from.length) {
      queryParams += "from=" + newSearchOptions.from + "&";
    }

    if (newSearchOptions.to.length) {
      queryParams += "to=" + newSearchOptions.to + "&";
    }

    if (newSearchOptions.language.length) {
      queryParams += "language=" + newSearchOptions.language + "&";
    }

    if (newSearchOptions.sortBy.length) {
      queryParams += "sortBy=" + newSearchOptions.sortBy + "&";
    }

    queryParams += "pageSize=100&";
    queryParams += "apiKey=" + apiKey;

    const requestOptions = {
      method: "GET",
      url: "https://newsapi.org/v2/everything?" + queryParams,
    };
    axios(requestOptions)
      .then((res) => {
        if (!initialReq) {
          setSearchOptions(newSearchOptions);
        }
        setIsLoading(false);
        setResults(res.data.articles);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsLayout
          searchType="everything"
          searchOptions={searchOptions}
          results={results}
          handleSearchOptions={handleSearchOptions}
        />
      )}
    </>
  );
}

export default EverythingPage;
