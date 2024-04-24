import { OEE } from "../pages/graphs";
import { Productivity } from "../pages/graphs";
import { AuthProvider } from "./context/auth-context";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return     <RouterProvider router={router}/>
}

export { App };