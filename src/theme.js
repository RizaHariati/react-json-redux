import { createTheme } from "@material-ui/core";
import { deepOrange, grey } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: grey,
    common: {
      black: "#424242",
    },
  },
});
