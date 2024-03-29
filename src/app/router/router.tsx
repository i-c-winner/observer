import { createBrowserRouter } from "react-router-dom";
import { OEE, Productivity } from "../../pages/graphs";
import { Loginin } from "../../pages/Loginin";
import {EnterPage} from "../../pages/EnterPage";

const router = createBrowserRouter([{
  path: '/',
  element: <Loginin/>
},
  {
    path: '/enter',
    element: <EnterPage />
  },
  {
    path: '/oee',
    element: <OEE/>
  },
  {
    path: '/productivity',
    element: <Productivity/>
  }
])

export { router }