import { LoadingArticle, NewsArticle } from "@/components";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NewsFeed = ({ articles, loading, error }) => {
  if (error) {
    return (
      <Typography
        align="center"
        color="error"
        marginBlockStart={8}
        variant="h6"
      >
        {error}
      </Typography>
    );
  }

  if (loading)
    return [...Array(4)].map((_, index) => <LoadingArticle key={index} />);

  if (!loading && !articles.length) {
    return (
      <Typography
        align="center"
        color="textSecondary"
        marginBlockStart={8}
        variant="h6"
      >
        No articles available.
      </Typography>
    );
  }

  return (
    <section>
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
    </section>
  );
};
