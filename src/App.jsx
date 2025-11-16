import { Header, Layout, NewsFeed } from "@/components";
import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const DEBOUNCE_DELAY = 500;

const apiUrl = (query = "", page = 1) =>
  `https://gnews.io/api/v4/top-headlines?category=general&apikey=${
    import.meta.env.VITE_GNEWS_API_KEY
  }&q=${query}&lang=ar&country=eg&max=4&page=${page}`;

const Footer = styled("div")(({ theme }) => ({
  marginBlockStart: -10,
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const pageNumber = useRef(1);
  const queryValue = useRef("");

  async function loadData() {
    const response = await fetch(
      apiUrl(queryValue.current, pageNumber.current)
    );
    const data = await response.json();
    if (data?.errors?.length) throw new Error(data.errors[0]);
    return data.articles.map((article) => {
      const {
        title,
        description,
        publishedAt,
        source: { name: author },
      } = article;
      return { title, description, author, publishedAt };
    });
  }

  const fetchAndUpdateArticles = () => {
    setLoading(true);
    loadData()
      .then((newArticles) => {
        setArticles(newArticles);
        setError("");
      })
      .catch((error) => {
        setArticles([]);
        console.log(error);

        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleSearch = (newQuery) => {
    pageNumber.current = 1;
    queryValue.current = newQuery;
    debounce(fetchAndUpdateArticles, DEBOUNCE_DELAY);
  };

  useEffect(fetchAndUpdateArticles, []);

  const handlePageChange = (direction) => {
    switch (direction) {
      case "Next":
        pageNumber.current += 1;
        break;
      case "Previous":
        pageNumber.current = Math.max(1, pageNumber.current - 1);
        break;
      default:
        break;
    }
    fetchAndUpdateArticles();
  };

  return (
    <Layout>
      <Header setQuery={handleSearch} />
      <NewsFeed articles={articles} error={error} loading={loading} />
      <Footer>
        <Button
          variant="outlined"
          onClick={() => handlePageChange("Previous")}
          // eslint-disable-next-line react-hooks/refs
          disabled={pageNumber.current === 1}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={() => handlePageChange("Next")}
          disabled={articles.length < 4}
        >
          Next
        </Button>
      </Footer>
    </Layout>
  );
}
