import { AppBar, Button, Drawer, styled, Toolbar, Typography, Box, Menu } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import logo from "/images/NBA888.png"
const useStyles = makeStyles({
  Logo:{
    width:"320px",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"100px",
    padding:"0 10px"
  }
})


const StyledToolbar = styled(Toolbar)({
  textAlign:"center",
  display:"flex",
  flexDirection:"column"
})


function ResponsiveAppBar() {
  const classes = useStyles();
  return (
      <Box sx={{width: "100%",textAlign:"center",backgroundColor: "rgba(0,0,0,0)"}}>
        <StyledToolbar sx={{ width:"100%"}}>
            <Box sx={{padding:"30px",paddingTop:"30px" }}>
            <img className={classes.Logo} src={logo}/>
            <Typography sx={{fontSize:"20px",color:"red",fontWeight:"600",marginTop:"10px",color:"white"}}>GUESS, QUIZ, STAR </Typography>
            </Box>
        </StyledToolbar>
      </Box>
  );
}
export default ResponsiveAppBar;
