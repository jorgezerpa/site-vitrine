import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, p: 0, minWidth: 80, fontSize: 2 }}>
        <InputLabel id="demo-simple-select-autowidth-label">lang</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={lang}
          onChange={handleChange}
          autoWidth
          label="Langulang"
        >
          <MenuItem value={10}>French</MenuItem>
          <MenuItem value={21}>English</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}