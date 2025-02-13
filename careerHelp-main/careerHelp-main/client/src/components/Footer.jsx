import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';
import { styled } from '@mui/material/styles';

// Styled components
const FooterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: theme.spacing(4, 0),
}));

const FooterContent = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  padding: theme.spacing(0, 2),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 'bold',
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialLink = styled('a')(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '24px',
  margin: theme.spacing(0, 1),
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const BackToTop = styled('a')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '50%',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[3],
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContent>
          <Grid container spacing={4}>
            <Grid item lg={3} md={6}>
              <FooterTitle variant="h6">CareerHelp</FooterTitle>
              <Typography variant="body2">
                India <br />
                XYZ City <br />
                AC road <br /><br />
                <strong>Phone:</strong> +91 xxxxx xxxxx <br />
                <strong>Email:</strong> abc@gmail.com <br />
              </Typography>
            </Grid>

            <Grid item lg={2} md={6}>
              <FooterTitle variant="h6">Useful Links</FooterTitle>
              <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                <Box component="li"><FooterLink variant="body2" href="#">Home</FooterLink></Box>
                <Box component="li"><FooterLink variant="body2" href="#">About us</FooterLink></Box>
                <Box component="li"><FooterLink variant="body2" href="#">Services</FooterLink></Box>
                <Box component="li"><FooterLink variant="body2" href="#">Contact</FooterLink></Box>
              </Box>
            </Grid>

            <Grid item lg={3} md={6}>
              <FooterTitle variant="h6">Our Services</FooterTitle>
              <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                <Box component="li"><FooterLink variant="body2" href="#">AI Based-Counselling</FooterLink></Box>
                <Box component="li"><FooterLink variant="body2" href="#">Direct interaction with teacher</FooterLink></Box>
                <Box component="li"><FooterLink variant="body2" href="#">Aptitude test</FooterLink></Box>
              </Box>
            </Grid>

            <Grid item lg={4} md={6}>
              <FooterTitle variant="h6">Join Us</FooterTitle>
              <Typography variant="body2">Join us for more informational guidance</Typography>
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Your Email"
                  type="email"
                  sx={{ marginBottom: 1, backgroundColor: 'white' }}
                />
                <Button variant="contained" color="primary" fullWidth>Subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </FooterContent>
      </FooterWrapper>

      <Box sx={{ backgroundColor: '#222', color: '#fff', padding: 2 }}>
        <FooterContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" align="center" alignItems="center">
                &copy; Copyright <strong><span>CareerHelp</span></strong>. All Rights Reserved
                <br />
                Designed by <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>DigitalDivas</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <SocialLink href="#" aria-label="Twitter"><BsTwitter /></SocialLink>
                <SocialLink href="#" aria-label="Facebook"><BsFacebook /></SocialLink>
                <SocialLink href="#" aria-label="Instagram"><BsInstagram /></SocialLink>
                <SocialLink href="#" aria-label="LinkedIn"><BsLinkedin /></SocialLink>
              </Box>
            </Grid>
          </Grid>
        </FooterContent>
      </Box>

      <BackToTop href="#" aria-label="Back to top">
        <FaArrowUp />
      </BackToTop>
    </>
  );
};

export default Footer;
