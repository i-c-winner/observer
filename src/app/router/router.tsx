import { createBrowserRouter } from "react-router-dom";
import { OEE, Productivity } from "../../pages/graphs";
import { Loginin } from "../../pages/Loginin";
import { EnterPage } from "../../pages/EnterPage";
import { Graphs } from "../../pages/Graphs";

const router = createBrowserRouter([{
  path: "/",
  element: <Loginin/>
},
  {
    path: "/enter",
    element: <EnterPage/>
  },
  {
    path: "/:type",
    element: <Graphs />
  },
]);

export { router };