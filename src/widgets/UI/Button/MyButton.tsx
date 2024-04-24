import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Theme} from "@mui/material/styles";


function MyButton(props: {
  buttonProps?: { [key: string]: any },
  wrapperProps?: { [key: string]: any }
}) {
  const ButtonStyled = styled(Button)(() => {
    return props?.buttonProps;
  });
  return (
    <Stack spacing={2} direction="row">
      <ButtonStyled variant="contained" {...props.wrapperProps}>Custom CSS</ButtonStyled>
    </Stack>
  );
}

export { MyButton };