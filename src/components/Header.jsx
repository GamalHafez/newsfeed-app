import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { MenuItem, Select } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[200]
      : theme.palette.grey[800],
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
  },
  marginLeft: "auto",
  width: 200,
  transition: "background-color 0.2s ease",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800],

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.secondary,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },

  "& .MuiSelect-icon": {
    color: theme.palette.text.secondary,
  },

  margin: theme.spacing(2),
  width: 200,
  height: 40,
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const Header = ({ setQuery, category, onCategoryChange }) => {
  const handleInputChange = (e) => setQuery(e.currentTarget.value);

  return (
    <AppBar sx={{ mb: -2 }} position="static">
      <Toolbar>
        <Typography variant="h6">NewsFeed App</Typography>
        <StyledSelect value={category} onChange={onCategoryChange}>
          <StyledMenuItem value="general">General</StyledMenuItem>
          <StyledMenuItem value="business">Business</StyledMenuItem>
          <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
          <StyledMenuItem value="world">World</StyledMenuItem>
          <StyledMenuItem value="science">Science</StyledMenuItem>
          <StyledMenuItem value="sports">Sports</StyledMenuItem>
          <StyledMenuItem value="technology">Technology</StyledMenuItem>
          <StyledMenuItem value="health">Health</StyledMenuItem>
          <StyledMenuItem value="nation">Nation</StyledMenuItem>
        </StyledSelect>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="action" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInputChange}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};
