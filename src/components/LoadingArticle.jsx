import { StyledCard } from "@/components";
import { Box, Skeleton } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

export function LoadingArticle() {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Skeleton variant="text" width={200} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={200} sx={{ fontSize: "1rem" }} />
      </Box>
    </StyledCard>
  );
}
