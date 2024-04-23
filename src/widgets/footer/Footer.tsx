import { Box } from "@mui/material";
import "../../pages/styles.scss"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../app/context/auth-context";


function Footer() {
  const navigate = useNavigate()
  const {logout} = useAuth()

  function goHome() {
    navigate('/enter')
  }

  function logoutClick() {
    logout()
    navigate('/')
  }

  return <Box sx={{
    width: "100%",
    height: "150px",
    display: "flex",
  }
  }>
    <div onClick={goHome} className="img img_home"></div>
    <div onClick={logoutClick} className="img img_exit"></div>

  </Box>
}

export { Footer }