import {BarHeader} from "../widgets/headers";
import { Box, Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

function EnterPage() {
  const navigate=useNavigate()
  return <Box sx={{
    width: '100vw',
    height: '100vh'
  }}>
    <BarHeader name='Пользователь: Исполнительный директор' titles={[]}/>

      <Box sx={{
        display: 'flex',
        flexFlow: 'column',
        width: '250px',
        paddingTop: '10%',
        textAlign: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        height: '20vh'
      }}>
        <Button onClick={()=>{navigate('/oee')}} variant='contained'>OEE</Button>
        <Button onClick={()=>{navigate('/productivity')}} variant='contained'>Продуктивность</Button>
        <Button onClick={()=>{}} variant='contained'>Трудоемкость</Button>
        <Button onClick={()=>{}} variant='contained'>Статус заказов</Button>
      </Box>
  </Box>
}

export {EnterPage}