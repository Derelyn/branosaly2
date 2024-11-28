import { createTheme } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const ximeaTheme = createTheme({
  palette: {
    warning: {
      main: "#F37021",
      light: amber[300],
      dark: amber[900],
      contrastText: "#fff",
    },
    primary: {
      main: "#252525",
      light: amber[300],
      dark: amber[900],
      contrastText: "#fff",
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F6F7F8", // Outline color
            },
            "&:hover fieldset": {
              borderColor: "#F6F7F8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F6F7F8",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#F6F7F8", // Label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#F6F7F8",
          },
          "& .MuiInputBase-root": {
            color: "#F6F7F8", // Text color
          },
          "& .MuiAutocomplete-endAdornment .MuiSvgIcon-root": {
            color: "#F6F7F8", // Dropdown arrow color
          },
        },
        paper: {
          backgroundColor: "#2F2F2F", // Dropdown background color
          color: "#F6F7F8", // Dropdown text color
        },
        option: {
          "&:hover": {
            backgroundColor: "#404040", // Background color on hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#F6F7F8", // Outline color
            },
            "&:hover fieldset": {
              borderColor: "#F6F7F8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F6F7F8",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#F6F7F8", // Label color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#F6F7F8",
          },
          "& .MuiInputBase-root": {
            color: "#F6F7F8", // Text color
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#F37021", // Badge background color
          color: "#F6F7F8", // Badge text color
          "& .MuiChip-deleteIcon": {
            color: "#F6F7F8", // Badge delete icon color
          },
        },
      },
    },
  },
});

export default ximeaTheme;
