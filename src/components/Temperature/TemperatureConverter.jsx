
// import ColorToggleButton from "./Button";
// import TextField from "@mui/material";
// import TextFields from "./TextField";
// import { createFilterOptions } from "@mui/material";

// function TempuratureConverter() {
    
//     return ( 
//         <div>
//             <TextFields />
//             <ColorToggleButton />
//         </div>
//      );
// }

// export default TempuratureConverter;

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


function TemperatureConverter() {
    const [valueCels, setValueCels] = useState('');
    const [valueFar, setValueFar] = useState('');

    const divStyle = {
        backgroundColor: 'lightGrey',
        padding: '20px',
        display: 'flex',
        gap: '10px',
        margin: '50px auto'
    };

    const getFahrenheit = (celsius) => { 
        return (celsius * 1.8 + 32).toFixed(2);
     };
    const getCelsius = (fahrenheit) => { 
        return ((fahrenheit - 32) / 1.8).toFixed(2);
     }; 

    const handleChangeCelsius = (e) => { 
        const celsius = e.target.value;
        setValueCels(celsius);
        celsius !== '' ? setValueFar(getFahrenheit(celsius)) : setValueFar('');
        
     };

    const handleChangeFahrenheit = (e) => { 
        const fahrenheit = e.target.value;
        setValueFar(fahrenheit);
        fahrenheit !== '' ? setValueCels(getCelsius(fahrenheit)) : setValueCels('');
        
     };  

    return ( 
        <div style={divStyle}>
            <TextField onChange={handleChangeCelsius} value={valueCels} label="Температура в градусах Цельсия" color="secondary" focused type="number"
             slotProps={{ input: {
             endAdornment: <InputAdornment position="end">°C</InputAdornment>,
                    },
                }}
             />  
            <TextField onChange={handleChangeFahrenheit} value={valueFar} label="Температура в градусах Фаренгейта" color="secondary" focused type="number"
             slotProps={{ input: {
             endAdornment: <InputAdornment position="end">°F</InputAdornment>,
                    },
                }}
             /> 
        </div>
     );
}

export default TemperatureConverter;