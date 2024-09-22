import React from 'react';
import Dashboard from './components/Dashboard';
import { CssBaseline, Container, Typography,Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box className="dashboard-container">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          WEATHER DASHBOARD
        </Typography>
        <Dashboard />
      </Container>
      </Box>
    </>
  );
};

export default App;
