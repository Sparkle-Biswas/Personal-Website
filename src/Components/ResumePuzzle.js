import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Tooltip } from '@mui/material';

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



function ResumePuzzle(props) {
  return (
    <Tooltip title='Resume'>
      <OutlineBox sx={{marginTop:'-0.5em'}} 
      onClick={props.resumeToggle}>
          <DescriptionIcon className='linkIcon' />
          <ExtensionIcon sx={{transform:'rotate(0deg)', fontSize:'5em', color: 'rgb(25, 79, 228)'}}/>
      </OutlineBox>
    </Tooltip>
  )
}

export default ResumePuzzle
