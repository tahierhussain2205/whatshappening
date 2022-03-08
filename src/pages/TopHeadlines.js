import { useEffect, useState } from "react";
import NewsLayout from "../layout/NewsLayout";
import axios from "axios";
import Loader from "../components/Loader";

function TopHeadlinesPage() {
  const initialSearchOptions = {
    q: "Russia Ukraine",
    exactMatch: false,
    sources: [],
    country: "",
    category: "",
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

    if (newSearchOptions.sources.length) {
      queryParams += "sources=" + newSearchOptions.sources.join(",") + "&";
    }

    if (newSearchOptions.country.length) {
      queryParams += "country=" + newSearchOptions.country + "&";
    }

    if (newSearchOptions.category.length) {
      queryParams += "category=" + newSearchOptions.category + "&";
    }

    queryParams += "pageSize=100&";
    queryParams += "apiKey=" + apiKey;

    const requestOptions = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?" + queryParams,
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
          searchType="top-headlines"
          searchOptions={searchOptions}
          results={results}
          handleSearchOptions={handleSearchOptions}
        />
      )}
    </>
  );
}

export default TopHeadlinesPage;
