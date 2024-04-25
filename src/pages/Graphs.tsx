import { BarHeader } from "../widgets/headers";
import { Footer } from "../widgets/footer/Footer";
import {useState} from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio
} from "@mui/material";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { MyButton } from "../widgets/UI/Button/MyButton";

function Graphs() {
  const {type} = useParams() as "oee" | "quota" | "productivity" | "status" | "complexity";
  const [selectedtype, setSelectedType] = useState<"days" | "weeks" | "months">("days");

  function selecting(event) {
    console.log(event);
  }
function getStyles(type) {
    const styles={
      width: '200px',
      onClick: ()=>{console.log('MyButton')}
    }
   return type===selectedtype? styles: {...styles, backgroundColor: 'rgba(0, 0, 0, 0.2)'}
  }
  return <Box sx={{
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    height: "100vh"
  }}>
    <BarHeader type={type}/>
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        boxSizing: "border-box"
      }}
    >
      <Typography sx={{
        marginRight: "100px"
      }}>Сортировать по: </Typography>
        <Stack spacing={3} direction="row">
          <MyButton wrapperProps={{text: "Дням"}} actions={{click: ()=>setSelectedType('days')}} buttonProps={getStyles('days')}/>
          <MyButton wrapperProps={{text: "Неделям"}} actions={{click: ()=>setSelectedType('weeks')}} buttonProps={getStyles('weeks')}/>
          <MyButton wrapperProps={{text: "Месяцам"}} actions={{click: ()=>setSelectedType('months')}} buttonProps={getStyles('months')}/>
        </Stack>
    </Box>
    <Box sx={{
      flexGrow: "1"
    }}>
    </Box>

    <Footer/>
  </Box>;

}

export { Graphs };