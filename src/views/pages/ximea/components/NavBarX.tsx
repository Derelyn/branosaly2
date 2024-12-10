// ** MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// ** components
import SearchField from "@/views/components/forms/SearchField";

type NavbarXProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  data: any[];
  setSelectedCamera: React.Dispatch<React.SetStateAction<any[]>>;
  setCollapseTrigger: React.Dispatch<
    React.SetStateAction<{
      open: number;
      close: number;
    }>
  >;
};

const NavbarX = ({
  setSearchQuery,
  data,
  setSelectedCamera,
  setCollapseTrigger,
}: NavbarXProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "95%",
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ borderRadius: "4px", backgroundColor: "#2F2F2F" }}
      >
        <Toolbar>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              my: "1rem",
            }}
          >
            <Grid
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <SearchField setSearchQuery={setSearchQuery} />
              <Autocomplete
                multiple
                sx={{ width: "calc(250px + 2vw)" }}
                size="small"
                limitTags={1}
                options={data}
                onChange={(e, v) => setSelectedCamera(v)}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="Select camera" />
                )}
              />
            </Grid>
            <Grid
              sx={{
                mt: { xs: "1rem", md: 0 },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                color="warning"
                variant="contained"
                sx={{ borderRadius: "25px" }}
                onClick={() => {
                  setCollapseTrigger((prev) => ({
                    close: 0,
                    open: prev.open + 1,
                  }));
                  setSearchQuery("");
                }}
              >
                Expand all
              </Button>
              <Button
                color="warning"
                variant="contained"
                sx={{ borderRadius: "25px", ml: 2 }}
                onClick={() => {
                  setCollapseTrigger((prev) => ({
                    open: 0,
                    close: prev.close + 1,
                  }));
                  setSearchQuery("");
                }}
              >
                Close all
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarX;
