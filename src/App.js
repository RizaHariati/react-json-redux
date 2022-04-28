import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ padding: 30 }}>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
