import React from "react";
import ReactDOM from 'react-dom/client'
import { App } from "./app/App";
import { AuthProvider } from "./app/context/auth-context";
import './index.scss'
import {ThemeProvider} from "@mui/material";
import {theme} from "./app/theme/mainTheme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </ThemeProvider>

  </React.StrictMode>,
)
