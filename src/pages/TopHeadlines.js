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
    let url = "https://newsapi.org/v2/top-headlines?";

    const query = searchOpts.exactMatch
      ? '"' + searchOpts.q + '"'
      : searchOpts.q;

    if (query && query.length) {
      url += "q=" + query + "&";
    }

    if (searchOpts.sources.length) {
      url += "sources=" + searchOpts.sources.join(",") + "&";
    }

    if (searchOpts.country.length) {
      url += "country=" + searchOpts.country + "&";
    }

    if (searchOpts.category.length) {
      url += "category=" + searchOpts.category + "&";
    }

    url += "pageSize=100&";

    const requestOptions = {
      method: "POST",
      url: "/api/news/get",
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
