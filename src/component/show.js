import React from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Typography,
  InputLabel
} from '@mui/material';

const YourComponent = () => {
  const Data = JSON.parse(localStorage.getItem('data1'));
  console.log(typeof Data);

  if (!Data || !Array.isArray(Data)) {
    // Handle the case when Data is null or not an array
    return <div>No data available.</div>;
  }

  return (
    <div className='cardsecondary'>
      <form>
        {Data.map((element, index) => {
          if (element.type === 'textarea') {
            return (
              <div key={index}>
                <InputLabel>{element.label}</InputLabel>
                <TextField
                  type="textarea"
                  className={element.className}
                  name={element.name}
                />
              </div>
            );
          } else if (element.type === 'text') {
            return (
              <div key={index}>
                <InputLabel>{element.label}</InputLabel>
                <TextField
                  type="text"
                  className={element.className}
                  name={element.name}
                />
              </div>
            );
          } else if (element.type === 'select') {
            return (
              <div key={index}>
                <InputLabel>{element.label}</InputLabel>
                <Select
                  className={element.className}
                  name={element.name}
                  value={element.value}
                  onChange={element.onChange}
                >
                  {element.values.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            );
          } else {
            return null;
          }
        })}
      </form>
    </div>
  );
};

export default YourComponent;
