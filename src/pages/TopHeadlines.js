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

    if (searchOpts.sources.length) {
      queryParams += "sources=" + searchOpts.sources.join(",") + "&";
    }

    if (searchOpts.country.length) {
      queryParams += "country=" + searchOpts.country + "&";
    }

    if (searchOpts.category.length) {
      queryParams += "category=" + searchOpts.category + "&";
    }

    queryParams += "pageSize=100&";
    queryParams += "apiKey=" + apiKey;

    const requestOptions = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?" + queryParams,
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
