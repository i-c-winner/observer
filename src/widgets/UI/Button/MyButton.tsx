import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


function MyButton(props: {
  buttonProps?: { [key: string]: any },
  actions?: { [key: string]: any },
  wrapperProps?: { [key: string]: any }
}) {
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