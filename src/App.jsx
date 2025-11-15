import { Header, Layout, NewsFeed } from "@/components";
import { useEffect, useState } from "react";

const apiUrl = (query = "") =>
  `https://gnews.io/api/v4/top-headlines?category=general&apikey=${
    import.meta.env.VITE_GNEWS_API_KEY
  }&q=${query}&lang=ar&country=eg`;

async function loadData(query) {
  const response = await fetch(apiUrl(query));
  const data = await response.json();
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

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    loadData().then((newArticles) => {
      setArticles(newArticles);
      setLoading(false);
    });
  }, []);

  const handleQueryChange = (newQuery) => {
    setLoading(true);
    loadData(newQuery).then((newArticles) => {
      setArticles(newArticles);
      setLoading(false);
    });
  };

  return (
    <Layout>
      <Header setQuery={handleQueryChange} />
      <NewsFeed articles={articles} loading={loading} />
    </Layout>
  );
}
