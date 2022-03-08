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
    let url = "https://newsapi.org/v2/everything?";
    const query = searchOpts.exactMatch
      ? '"' + searchOpts.q + '"'
      : searchOpts.q;

    if (query && query.length) {
      url += "q=" + query + "&";
    }

    let searchIn = [];
    Object.keys(searchOpts.searchIn).forEach((key) => {
      if (searchOpts.searchIn[key]) {
        searchIn.push(key);
      }
    });
    if (searchIn && searchIn.length) {
      url += "searchIn=" + searchIn + "&";
    }

    if (searchOpts.sources.length) {
      url += "sources=" + searchOpts.sources.join(",") + "&";
    }

    if (searchOpts.domains.length) {
      url += "domains=" + searchOpts.domains.join(",") + "&";
    }

    if (searchOpts.excludeDomains.length) {
      url += "excludeDomains=" + searchOpts.excludeDomains.join(",") + "&";
    }

    if (searchOpts.from.length) {
      url += "from=" + searchOpts.from + "&";
    }

    if (searchOpts.to.length) {
      url += "to=" + searchOpts.to + "&";
    }

    if (searchOpts.language.length) {
      url += "language=" + searchOpts.language + "&";
    }

    if (searchOpts.sortBy.length) {
      url += "sortBy=" + searchOpts.sortBy + "&";
    }

    url += "pageSize=100&";

    const requestOptions = {
      method: "POST",
      url: process.env.REACT_APP_BACKEND_API + "/api/news/get",
      headers: {
        "Content-Type": "application/json",
      },
      data: { url },
    };

    axios(requestOptions)
      .then((res) => {
        setIsLoading(false);
        setResults(res.data.data.articles);
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
