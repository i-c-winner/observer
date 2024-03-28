import {OEE} from "../pages/graphs";
import { Workering } from "../pages/graphs/Workering";
import { AuthProvider } from "./context/auth-context";


function App () {
  return  <AuthProvider>

      <OEE />
      <Workering />

  </AuthProvider>


}

export {App}