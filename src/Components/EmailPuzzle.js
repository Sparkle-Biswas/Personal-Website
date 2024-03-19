import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const OutlineBox = styled(Box)({
  width: '5em',
  height: '5em',
  display:'flex',
  alignItems:'center',
  justifyContent: 'center',
  borderRadius:'15px',
  border: '1px solid black',
  '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.3s ease-out',
      cursor: 'pointer'
  },
});



function EmailPuzzle(props) {
  return (
    <Tooltip title='Email' placement='top'>
      <OutlineBox onClick={props.emailToggle}>
          <AlternateEmailIcon className='linkIcon' />
          <ExtensionIcon sx={{transform:'rotate(90deg)', fontSize:'5em', color: 'rgb(25, 79, 228)'}}/>
      </OutlineBox>
    </Tooltip>
  )
}

export default EmailPuzzle
