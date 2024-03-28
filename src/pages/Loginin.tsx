import {useAuth} from "../app/context/auth-context";
import { Box, Button, TextField } from "@mui/material";

function Loginin () {
  const {user, login} =useAuth()

return <Box >
  <TextField />
  <TextField />
  <Button >Login</Button>
</Box>


}
export {Loginin}