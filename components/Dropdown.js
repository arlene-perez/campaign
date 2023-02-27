import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import guests from '../files/numberOfGuests';

 const Dropdown = (props) => {
  const [name, setName] = React.useState('');

  const handleChange = () => {
    setName(event?.target?.dataset?.value);
    props.onSelectGuest();
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Name"
          onChange={handleChange}
        >
          {guests.map((item, index) => {
          return (
            <MenuItem key={index} value={item.guestName}>{item.guestName}</MenuItem>
          )
        })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown