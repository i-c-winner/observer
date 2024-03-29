import { useAuth } from "../app/context/auth-context";
import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom";

function Loginin() {
  const navigate=useNavigate()
  const {login} = useAuth()
  const refName=useRef<HTMLInputElement>(null)
  const refPassword= useRef<HTMLInputElement>(null)
  function validatorUser(user: string| undefined) {
   return typeof user==='string'&& user!==''
  }
function loginin() {
if (validatorUser(refName.current?.value)) {
login(refName.current?.value)
  navigate('/enter')
}

}
   return <Box>
    <TextField  inputRef={refName}/>
    <TextField inputRef={refPassword}/>
    <Button onClick={loginin} >Login</Button>
  </Box>


}

export { Loginin }