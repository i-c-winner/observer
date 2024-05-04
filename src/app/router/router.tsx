import { createBrowserRouter } from "react-router-dom";
import { Loginin } from "../../pages/Loginin";
import { EnterPage } from "../../pages/EnterPage";
import { Graphs } from "../../pages/Graphs";
// @ts-ignore
import React from 'react'
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