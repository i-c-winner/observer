import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState, createContext } from "react";
import { mainTheme } from "./theme/mainTheme";
import { router } from "./router/router";

const ThemeContext = createContext({
  toggleTheme: () => {},
});

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () => createTheme(mode === "dark" ? mainTheme.dark : mainTheme.light),
    [mode]
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      ;
    </ThemeContext.Provider>
  );
}

export { App, ThemeContext };
