
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { IoIosSunny } from "react-icons/io";
import { WbSunny } from '@mui/icons-material'; 


interface WeatherWidgetProps {
  id: number;
  onRemove: () => void;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ id, onRemove }) => {
  const [unit, setUnit] = useState<'Celsius' | 'Fahrenheit'>('Celsius');

  //  hardcoded weather data in Celsius
  const weatherData = {
    location: 'New York',
    temperature: 22, // in Celsius
    condition: 'Sunny',
    icon: <WbSunny sx={{ fontSize: 50, color: '#ffeb3b' }} />,
  };

  const temperature = unit === 'Celsius'
    ? weatherData.temperature
    : (weatherData.temperature * 9) / 5 + 32;

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <Card sx={{backgroundColor: "#28221c"}} className="weather-widget">
      <CardContent>
        <Typography variant="h5">{weatherData.location}</Typography>
        <Typography variant="h6">
          {temperature.toFixed(1)}°{unit === 'Celsius' ? 'C' : 'F'}
        </Typography>
        <Button onClick={toggleUnit}>
          Switch to {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
        </Button>
        <Typography sx ={{color: '#8f4d0c'}} variant="body1">{weatherData.condition}</Typography>
        <Typography variant="body1">{weatherData.icon}</Typography>
        
       <Box sx={{display:"flex",placeContent:"flex-end"}}> 
        <IconButton sx ={{color: '#e51010'}} aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
        </Box>
       
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
