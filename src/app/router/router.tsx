import { createBrowserRouter } from "react-router-dom";
import { OEE, Workering } from "../../pages/graphs";
import { Loginin } from "../../pages/Loginin";

const router = createBrowserRouter([{
  path: '/',
  element: <Loginin/>
},
  {
    path: '/oee',
    element: <OEE/>
  },
  {
    path: '/workering',
    element: <Workering/>
  }
])

export { router }