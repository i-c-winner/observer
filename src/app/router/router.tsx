import { createBrowserRouter } from "react-router-dom";
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
    element: <Graphs/>
  },
]);

export { router };