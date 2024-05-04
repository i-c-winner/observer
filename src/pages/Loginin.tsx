import { Box, TextField, Typography, Input } from "@mui/material";
// @ts-ignore
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../app/context/auth-context";
import { Header } from "../widgets/headers/Header";
import "./styles.scss";
import { MyButton } from "../widgets/UI/Button/MyButton";

function Loginin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const refName = useRef<HTMLInputElement>();
  const refPassword = useRef<HTMLInputElement>();

  function validatorUser(user: string | undefined) {
    return typeof user === "string" && user !== "";
  }

  function loginin() {
    if (validatorUser(refName.current?.value)) {
      login(refName.current?.value);
      navigate("/enter");
    }
  }

  const styleInput = {
    marginLeft: "50px",
    background: "white",
    width: "300px",
  };
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <Input />
        <Box
          sx={{
            width: "690px",
            height: "300px",
            padding: "50px",
            borderRadius: "15px",
            background: "#f0eded",
            display: "flex",
            flexFlow: "column",
            margin: "0 auto",
            border: "1px solid black",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              fontSize: "2rem",
            }}
          >
            <Typography
              sx={{ flexGrow: "1", alignContent: "center", fontSize: "1.5rem" }}
            >
              Пользователь
            </Typography>
            <TextField
              sx={styleInput}
              label="Пользователь"
              inputRef={refName}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              fontSize: "2rem",
            }}
          >
            <Typography
              sx={{
                flexGrow: "1",
                alignContent: "center",
                fontSize: "1.5rem",
              }}
            >
              Пароль
            </Typography>
            <TextField sx={styleInput} label="Пароль" inputRef={refPassword} />
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
            }}
          >
            <MyButton
              buttonProps={{
                backgroundColor: "#dadada",
                color: "#000",
                "&:hover": {
                  color: "#fff",
                },
              }}
              wrapperProps={{
                onClick: loginin,
                text: "Войти",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Loginin };
