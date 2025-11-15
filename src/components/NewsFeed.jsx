import { NewsArticle } from "@/components";
import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

export const NewsFeed = ({ articles, loading }) => {
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!articles.length) {
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
