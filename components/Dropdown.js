import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import guests from '../files/numberOfGuests';
import styles from '../styles/page.module.css';

import Spinner from '@/components/Spinner';

 const Dropdown = (props) => {
  const [guestCount, setGuestCount] = React.useState(0);
  const [name, setName] = React.useState('');
  const [isAttending, setIsAttending] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)


    let form = {
        name,
        guestCount,
        isAttending
    }

    const rawResponse = await fetch('/api/googleApi', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-goog-api-key': '17fb0ac55f21a1a9a0e4815ea7534bfb4dc70563'
        },
        body: JSON.stringify(form)
    });

    const content = await rawResponse.json();

    if(content) { setIsSubmitting(false) }

    // Reset the form fields
    setGuestCount('')
    setIsAttending('')
    setName('')
    props.onSubmit()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <Box sx={{ minWidth: 120, marginBottom: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            label="Name"
            onChange={e => setName(e.target.value)}
          >
            {guests.map((item, index) => {
            return (
              <MenuItem key={index} value={item.guestName}>{item.guestName}</MenuItem>
            )
          })}
          </Select>
        </FormControl>
        </Box>
    </div>
    <div>
      <Box sx={{ minWidth: 120, marginBottom: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Total Guest Count</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={guestCount}
          label="Total Guest Count"
          onChange={e => setGuestCount(e.target.value)}
        >
          <MenuItem key={0} value={0}>{0}</MenuItem>
          <MenuItem key={1} value={1}>{1}</MenuItem>
          <MenuItem key={2} value={2}>{2}</MenuItem>
          <MenuItem key={3} value={3}>{3}</MenuItem>
          <MenuItem key={4} value={4}>{4}</MenuItem>
          <MenuItem key={5} value={5}>{5}</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </div>
    <div>
      <Box sx={{ minWidth: 120, marginBottom: 5 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Will you be attending?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={isAttending}
          label="Will you be attending?"
          onChange={e => setIsAttending(e.target.value)}
        >
          <MenuItem key={0} value={'Yes'}>{'Yes! I am so excited!'}</MenuItem>
          <MenuItem key={1} value={'No'}>{'No, but I am so happy for you two!'}</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </div>
    <div className={styles.weddingSectionButton}>
      {isSubmitting ? (
        <div className={styles.spinner}><Spinner/></div>
      ) : (
        <button disabled={isSubmitting}>Submit</button>
      )}
    </div>
  </form>
  </div>
    
  );
}

export default Dropdown