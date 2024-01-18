import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
      border: '1px solid white',
      boxShadow: '0px 0px 6px white, inset 0px 0px 15px rgb(85, 9, 185)',
      cursor: 'pointer'
  },
});



function EmailPuzzle(props) {
  return (
    <OutlineBox onClick={props.emailToggle}>
        <AlternateEmailIcon sx={{color:'aliceblue', fontSize:'x-large', position:'absolute', zIndex:'100'}} />
        <ExtensionIcon sx={{transform:'rotate(90deg)', fontSize:'5em', color: 'rgb(85, 9, 185)'}}/>
    </OutlineBox>
  )
}

export default EmailPuzzle
