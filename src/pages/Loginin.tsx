import { useAuth } from "../app/context/auth-context";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarHeader } from "../widgets/headers";
import "./styles.scss"

function Loginin() {
  const navigate = useNavigate()
  const {login} = useAuth()
  const refName = useRef<HTMLInputElement>()
  const refPassword = useRef<HTMLInputElement>()

  function validatorUser(user: string | undefined) {
    return typeof user === 'string' && user !== ''
  }

  function loginin() {
    if (validatorUser(refName.current?.value)) {
      login(refName.current?.value)
      navigate('/enter')
    }

  }

  const styleInput = {
    marginLeft: "50px",
    background: 'white',
    width: "300px"

  }
  return <Box>
    <BarHeader name={''} titles={[]}/>
    <Box
      sx={{
        paddingTop: '150px',
        textAlign: 'center'
      }}
    >
      <Box sx={{
        width: "690px",
        height: "300px",
        padding: "50px",
        borderRadius: "15px",
        background: "#f0eded",
        display: "flex",
        flexFlow: "column",
        margin: "0 auto",
        border: "1px solid black",
        justifyContent: "space-between"
      }}><Box sx={{
        display: 'flex',
        justifyContent: "flex-end",
        width: '100%',
        fontSize: "2rem"
      }}>
        <Typography sx={{flexGrow: "1", alignContent: "center", fontSize: "1.5rem"}}>Пользователь</Typography>
        <TextField sx={styleInput} label="Пользователь" inputRef={refName}/>
      </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: "flex-end",
          width: '100%',
          fontSize: "2rem"
        }}>
          <Typography sx={{
            flexGrow: "1",
            alignContent: "center",
            fontSize: "1.5rem"
          }}>Пароль</Typography>
          <TextField sx={styleInput} label="Пароль" inputRef={refPassword}/>
        </Box>
        <Box sx={{
          alignSelf: "flex-end",
          width: '200px'
        }}>
          <Button variant={"contained"} color={"primary"} onClick={loginin}>Вход в систему</Button>
        </Box>

      </Box>

    </Box>

  </Box>


}

export { Loginin }