import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import { Snackbar } from '@mui/material';


const EmailModal = (props) => {
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("sparklebiswas@gmail.com");
    setMessage(true);
    
  };

  const handleClose = () => {
    setMessage(false);
  };

  return (
    <div>
      <Modal sx={{display:'flex',alignItems:'center', justifyContent:'center', border:'0px'}}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={{backgroundColor:'black', height:'5em', width:'30em', outline:'none',
        borderRadius:'1em', display:'flex', alignItems:'center', justifyContent:'center',
        flexDirection:'column', border:'2px solid rgb(85, 9, 185)', padding:'0.5em',
        boxShadow:'0px 2px 11px rgb(96, 40, 169)'}}>
          <div style={{display:'flex', gap:'1em', justifyContent:'center', alignItems:'center'}}>
            <p>
                Email Address:
            </p>
            <p style={{color:'white'}}>
                sparklebiswas@gmail.com
            </p>
            <Tooltip title='Copy'>
              <ContentCopyIcon sx={{color:'rgb(85, 9, 185)', cursor: 'pointer'}} onClick={handleClick}/>
            </Tooltip>
          </div>
        </div>
      </Modal>
      <Snackbar
        open={message}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied!"
      />
    </div>
  );
};

export default EmailModal;
