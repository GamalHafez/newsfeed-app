import { Header, Layout, NewsFeed } from "@/components";
import { useEffect, useState } from "react";

const apiUrl = `https://newsapi.org/v2/everything?q=مصر&language=ar&apiKey=${
  import.meta.env.VITE_NEWS_API_KEY
}`;

async function loadData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.articles.map((article) => {
    const { title, description, author, publishedAt } = article;
    return { title, description, author, publishedAt };
  });
}

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadData().then(setArticles);
  }, []);

  return (
    <Layout>
      <Header />
      <NewsFeed articles={articles} />
    </Layout>
  );
}
