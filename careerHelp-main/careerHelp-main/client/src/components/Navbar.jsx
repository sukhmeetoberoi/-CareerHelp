import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="primary" // Use a Material-UI color if available, otherwise specify a hex color
      elevation={0}
      sx={{ 
        backgroundColor: '#0033cc', // Change this to your desired blue color
        boxShadow: 'none',
        mb: 4 ,// Adds margin-bottom
     
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          CareerHelp
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <Button
              component={Link}
              to="#hero"
              sx={{ color: 'inherit', textTransform: 'none' }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="#about"
              sx={{ color: 'inherit', textTransform: 'none' }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="#services"
              sx={{ color: 'inherit', textTransform: 'none' }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="#contact"
              sx={{ color: 'inherit', textTransform: 'none' }}
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/login1"
              sx={{ color: 'inherit', textTransform: 'none' }}
            >
              Login/Register
            </Button>
            <IconButton
              component={Link}
              to="/edit-profile"
              sx={{ ml: 2 }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
