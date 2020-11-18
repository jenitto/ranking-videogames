import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import firebase, { FirebaseContext } from "./firebase";
import Layout from "./core/layout/layout";
import "./App.scss";

function App() {
  const theme = createMuiTheme({
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: "italic",
      },
    },
  });

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
