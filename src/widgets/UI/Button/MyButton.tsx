import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Theme} from "@mui/material/styles";


function MyButton(props: {
  buttonProps?: { [key: string]: any },
  actions?: { [key: string]: any },
  wrapperProps?: { [key: string]: any }
}) {
  console.log(props.buttonProps)
  const ButtonStyled = styled(Button)(() => {
    return {
      ...props.buttonProps,
      onClick:()=>{console.log('click')}
    }
  });

  return (
      <ButtonStyled  onClick={props.actions?.click} variant="contained" {...props.wrapperProps}>{props.wrapperProps?.text}</ButtonStyled>
  );
}

export { MyButton };