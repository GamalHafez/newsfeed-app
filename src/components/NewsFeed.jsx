import { NewsArticle } from "@/components";

export const NewsFeed = ({ articles }) => {
  return (
    <section>
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
    </section>
  );
};
