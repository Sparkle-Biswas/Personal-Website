import '../App.js';
import ExtensionIcon from '@mui/icons-material/Extension';
import GitHubIcon from '@mui/icons-material/GitHub';
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


function GithubPuzzle(props) {
  return (
    <Tooltip title='Github' placement='top'>
      <OutlineBox sx={{marginTop:'-0.5em'}}
      onClick={props.gitToggle}>
          <GitHubIcon sx={{color:'aliceblue', fontSize:'x-large', position:'absolute', zIndex:'100'}} />
          <ExtensionIcon sx={{transform:'rotate(0deg)', fontSize:'5em', color: 'rgb(25, 79, 228)'}}/>
      </OutlineBox>
    </Tooltip>
  )
}

export default GithubPuzzle
