import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
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



function LinkedinPuzzle(props) {
  return (
    <Tooltip title='LinkedIn'>
      <OutlineBox
      onClick={props.linkToggle}>
          <LinkedInIcon sx={{color:'aliceblue', fontSize:'x-large', position:'absolute', zIndex:'100'}} />
          <ExtensionIcon sx={{transform:'rotate(90deg)', fontSize:'5em', color: 'rgb(85, 9, 185)'}}/>
      </OutlineBox>
    </Tooltip>
  )
}

export default LinkedinPuzzle
