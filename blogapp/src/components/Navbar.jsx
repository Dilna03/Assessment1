import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
          <Button  variant="contained"   color='inherit'> <Link to="/AddBlog">AddBlog</Link></Button>&nbsp;
          <Button  variant="contained"   color='inherit'> <Link to="/DashBoard">DashBoard</Link></Button>&nbsp;
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
