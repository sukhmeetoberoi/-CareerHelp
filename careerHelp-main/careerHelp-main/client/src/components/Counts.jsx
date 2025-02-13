import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

const Counts = () => {
  return (
    <Box id="counts" sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Typography
              variant="h3"
              component="span"
              sx={{ fontWeight: 'bold' }}
              data-purecounter-start="0"
              data-purecounter-end="6"
              data-purecounter-duration="1"
              className="purecounter"
            />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Clients
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Typography
              variant="h3"
              component="span"
              sx={{ fontWeight: 'bold' }}
              data-purecounter-start="0"
              data-purecounter-end="50"
              data-purecounter-duration="1"
              className="purecounter"
            />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Hours Of Support
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <Typography
              variant="h3"
              component="span"
              sx={{ fontWeight: 'bold' }}
              data-purecounter-start="0"
              data-purecounter-end="4"
              data-purecounter-duration="1"
              className="purecounter"
            />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Hard Workers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Counts;
