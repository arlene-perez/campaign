import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import guests from '../files/numberOfGuests';

const guestExample = [
  {"Jules Alaniz": 2}, {"Paula Alcazar": 1}, {"Ylyza Ang": 2}
]

 const Dropdown = (props) => {
  const [guestCount, setGuestCount] = React.useState(0);
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    const selectedName = event?.target?.value;
    const guestDetails = guests.filter(guest => guest.guestName === selectedName);
    setName(selectedName);
    setGuestCount(guestDetails[0]["numberOfGuests"]);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, marginBottom: 5 }}>
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
    <h2>Total Number of Guests: {guestCount}</h2>
    </div>
  );
}

export default Dropdown