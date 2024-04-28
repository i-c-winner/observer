import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Footer } from "../widgets/footer/Footer";
import { Header } from "../widgets/headers/Header";

function EnterPage() {
  const navigate = useNavigate();
  const styleInput = {
    marginTop: '10px',
    width: "305px",
    height: "50px"
  };

  return <Box sx={{
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    flexFlow: "column"
  }}>
    <Header/>

    <Box sx={{
      display: "flex",
      flexFlow: "column",
      width: "250px",
      paddingTop: "20px",
      textAlign: "center",
      justifyContent: "space-between",
      margin: "0 auto",
    }}>
      <Button style={styleInput} onClick={() => {
        navigate("/oee");
      }} variant="contained">OEE</Button>
      <Button style={styleInput} onClick={() => {
        navigate("/quota");
      }} variant="contained">Фактические квоты</Button>
      <Button style={styleInput} onClick={() => {
        navigate('/orders')
      }} variant="contained">Заказы</Button>
      <Button style={styleInput} onClick={() => {
        navigate('/status')
      }} variant="contained">Статус заказов</Button>
      <Button style={styleInput} onClick={() => {
        navigate('/complexity')
      }} variant="contained">Трудоёмкость</Button>
    </Box>
    <Footer/>
  </Box>;
}

export { EnterPage };