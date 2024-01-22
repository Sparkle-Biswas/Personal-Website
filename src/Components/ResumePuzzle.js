import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import DescriptionIcon from '@mui/icons-material/Description';import Box from '@mui/material/Box';
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



function InstaPuzzle(props) {
  return (
    <OutlineBox sx={{marginTop:'-0.5em'}} 
    onClick={props.resumeToggle}>
        <DescriptionIcon sx={{color:'aliceblue', fontSize:'x-large', position:'absolute', zIndex:'100'}} />
        <ExtensionIcon sx={{transform:'rotate(0deg)', fontSize:'5em', color: 'rgb(85, 9, 185)'}}/>
    </OutlineBox>
  )
}

export default InstaPuzzle
