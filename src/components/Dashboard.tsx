import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import WeatherWidget from './WeatherWidget';
import '../WeatherWidget.css'; // Import the CSS file

interface Widget {
  id: number;
}

const Dashboard: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    const savedWidgets = localStorage.getItem('widgets');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
  }, []);

  useEffect(() => {
    if (widgets.length > 0) {
      localStorage.setItem('widgets', JSON.stringify(widgets));
    }
  }, [widgets]);

  const addWidget = () => {
    const newWidget = { id: Date.now() };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: number) => {
    const updatedWidgets = widgets.filter(widget => widget.id !== id);
    setWidgets(updatedWidgets);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box className="center-button" >
      <Button className="button" variant="contained" onClick={addWidget}>
        Add Widget
      </Button>
      </Box>
      <Grid container spacing={3} >
        {widgets.map((widget) => (
          <Grid item  xs={12} sm={6} md={4} key={widget.id}>
            
            <WeatherWidget id={widget.id} onRemove={() => removeWidget(widget.id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;




