import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import "./Style.css";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddRoom() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const close = () => {
    setOpen(false);
  }
  return (
    <div>
      <Button onClick={handleOpen} style={{color: "white"}}>Add Room</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <center>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Request form to add a new room in the chat
          </Typography><br/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
          id="outlined-textarea"
          label="name room"
          multiline
        /><br/><br/>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
        />
          </Typography><br/>
          <button type='button' className='sendR' onClick={close}><b>Send a request</b></button>
        </Box>
        </center>
      </Modal>
    </div>
  );
}