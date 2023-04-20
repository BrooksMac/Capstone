import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function LoginInfoPopUp({setEmail, setPassword}) {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFillFields = (value) => {
    setEmail(value);
    setPassword('P@ssword1')
    handleClose();
    console.log(value);

  };

  return (
    <div>
      <Button color='secondary' variant='contained' size='large' onClick={handleClickOpen}>
        Login info
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align='center'>Welcome to Competency Tracking Tool.  This app was developed for the SAIT Optician Program to aid students, preceptors, and instructors with managing the plethora of documents necessary to complete a practicum.</DialogTitle>
        <Typography paddingX={5} variant='h6'>Please select a user to get started:</Typography>
        <DialogActions style={{ justifyContent: 'center', display: 'flex' }}>
          <IconButton size='large' onClick={() => handleFillFields("student@gmail.com")} color="primary">
            Student
            <PersonIcon style={{fontSize: 40}}/>
          </IconButton >
          <IconButton size='large' onClick={() => handleFillFields("preceptor@gmail.com")} color="secondary">
            Preceptor
            <PersonIcon style={{fontSize: 40}}/>
          </IconButton>
          <IconButton size='large' onClick={() => handleFillFields("brooks@sait.ca")} color="success">
            Instructor
            <PersonIcon style={{fontSize: 40}}/>
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}