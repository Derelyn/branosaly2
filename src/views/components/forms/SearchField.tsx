import { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type PropsType = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchField = ({ setSearchQuery }: PropsType) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSetSearchTerm = useCallback(
    debounce((value) => setSearchQuery(value), 200),
    [setSearchQuery],
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debouncedSetSearchTerm(e.target.value);
  };

  return (
    <TextField
      variant="outlined"
      label="Search"
      placeholder="camera, parts..."
      value={searchTerm}
      onChange={handleSearch}
      size="small"
      sx={{
        color: "#F6F7F8",
        borderRadius: "4px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#F6F7F8",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#F6F7F8",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#F6F7F8",
        },
        "& .MuiInputAdornment-root .MuiSvgIcon-root": {
          color: "#F6F7F8", // Set icon color
        },
        "& .MuiOutlinedInput-root": { color: "#F6F7F8" },
        "& .MuiInputLabel-outlined": {
          color: "#F6F7F8",
          fontWeight: "bold",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
