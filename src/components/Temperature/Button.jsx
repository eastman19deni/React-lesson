import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from 'react';
import TextFields from './TextField';
import { useState } from "react";


export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');
  
    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [valueCels, setvalueCels] = useState('')
    const [valueFar, setvalueFar] = useState('');
    
    const getFahrenheit = (celsius) => {
        return (celsius * 1.8 + 32).toFixed(2)
    };
    const getCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) /1.8).toFixed(2)
    };
    const handleChangeCelsius = (e) => {
         const celsius = e.target.value;
         setvalueCels(celsius)
         celsius !== '' ? setvalueCels(getFahrenheit(celsius)) : setvalueFar('')
    };
    const handleChangeFahrenheit = (e) => {
        const fahrenheit = e.target.valueStandard
        setvalueFar(fahrenheit)
        fahrenheit !== '' ? setvalueCels(getCelsius(fahrenheit)) : setvalueCels('')
    }
    return (
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton onChange={handleChangeCelsius} value={valueCels} label="температура в градусах Цельсия" color='secondary' focused type="number" slopProps={{input: {
            endBasicTextFields: <TextFields>Celsius</TextFields>
        }}}>Celsius</ToggleButton>
      </ToggleButtonGroup>
    );
  }