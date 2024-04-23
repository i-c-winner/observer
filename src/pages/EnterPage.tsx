import { BarHeader } from "../widgets/headers";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import {useAuth} from "../app/context/auth-context";
import { Footer } from "../widgets/footer/Footer";

function EnterPage() {
  const {logout}=useAuth()
  const navigate = useNavigate()
  const styleInput = {
    width: '305px',
    height: "50px"
  }
function exitClick() {
    logout()
  navigate('/')
}
  return <Box sx={{
    width: '100vw',
    height: '100vh',
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "column"
  }}>
    <BarHeader name='' titles={[]}/>

    <Box sx={{
      display: 'flex',
      flexFlow: 'column',
      width: '250px',
      paddingTop: '10%',
      textAlign: 'center',
      justifyContent: 'space-between',
      margin: '0 auto',
      height: '30vh'
    }}>
      <Button style={styleInput} onClick={() => {
        navigate('/oee')
      }} variant='contained'>Годовой отчет</Button>
      <Button  disabled={true} style={styleInput} onClick={() => {
        navigate('/productivity')
      }} variant='contained'>Продуктивность</Button>
      <Button disabled={true} style={styleInput} onClick={() => {
      }} variant='contained'>Трудоемкость</Button>
      <Button disabled={true} style={styleInput} onClick={() => {
      }} variant='contained'>Статус заказов</Button>
    </Box>
    <Footer />
  </Box>
}

export { EnterPage }