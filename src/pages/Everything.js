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
    handleApiRequest(searchOptions);
  }, [searchOptions]);

  const handleSearchOptions = (newSearchOpts) => {
    setSearchOptions(newSearchOpts);
  };

  const handleApiRequest = (searchOpts) => {
    setIsLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    let queryParams = "";
    const query = searchOpts.exactMatch
      ? '"' + searchOpts.q + '"'
      : searchOpts.q;

    if (query && query.length) {
      queryParams += "q=" + query + "&";
    }

    let searchIn = [];
    Object.keys(searchOpts.searchIn).forEach((key) => {
      if (searchOpts.searchIn[key]) {
        searchIn.push(key);
      }
    });
    if (searchIn && searchIn.length) {
      queryParams += "searchIn=" + searchIn + "&";
    }

    if (searchOpts.sources.length) {
      queryParams += "sources=" + searchOpts.sources.join(",") + "&";
    }

    if (searchOpts.domains.length) {
      queryParams += "domains=" + searchOpts.domains.join(",") + "&";
    }

    if (searchOpts.excludeDomains.length) {
      queryParams +=
        "excludeDomains=" + searchOpts.excludeDomains.join(",") + "&";
    }

    if (searchOpts.from.length) {
      queryParams += "from=" + searchOpts.from + "&";
    }

    if (searchOpts.to.length) {
      queryParams += "to=" + searchOpts.to + "&";
    }

    if (searchOpts.language.length) {
      queryParams += "language=" + searchOpts.language + "&";
    }

    if (searchOpts.sortBy.length) {
      queryParams += "sortBy=" + searchOpts.sortBy + "&";
    }

    queryParams += "pageSize=100&";
    queryParams += "apiKey=" + apiKey;

    const requestOptions = {
      method: "GET",
      url: "https://newsapi.org/v2/everything?" + queryParams,
    };
    axios(requestOptions)
      .then((res) => {
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
