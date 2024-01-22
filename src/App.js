import './App.css';
import ExtensionIcon from '@mui/icons-material/Extension';
import Box from '@mui/material/Box';
import Modal from '@mui/joy/Modal';
import SchoolIcon from '@mui/icons-material/School';
import EmailPuzzle from './Components/EmailPuzzle';
import GithubPuzzle from './Components/GithubPuzzle';
import LinkedinPuzzle from './Components/LinkedinPuzzle';
import ResumePuzzle from './Components/ResumePuzzle';
import TopRightPiece from './Components/TopRightPiece';
import TopLeftPiece from './Components/TopLeftPiece';
import BottomLeftPiece from './Components/BottomLeftPiece';
import BottomRightPiece from './Components/BottomRightPiece';
import { styled } from '@mui/system';

const BottomBox = styled(Box)({
  width: '31em',
  height: '2.18em',
  transform: 'skew(-41deg)',
  backgroundColor: 'black',
  marginLeft:'-6px',
  border: '1px solid rgb(96, 40, 169)',
  boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)' 
});

const RightBox = styled(Box)({
  width: '2em',
  height: '25em',
  backgroundColor: 'black',
  transform: 'skew(0deg,-47deg)',
  marginRight:'-11px',
  marginTop:'17px',
  border: '1px solid rgb(96, 40, 169)',
  boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)'
  
});

function App() {
  const emailToggle = () => {
    alert("clicked");
  };

  const linkToggle = () => {
    window.open('https://www.linkedin.com/in/sparkle-biswas/', '_blank');
  };

  const gitToggle = () => {
    window.open('https://github.com/Sparkle-Biswas', '_blank');
  };

  const resumeToggle = () => {
    alert("navigate to resume");
  };

  return (
    <div className="App">
      <Box sx={{display:'flex', alignItems:'center', gap:'4em', paddingTop:'2em'}}>
        <Box sx={{ display: 'flex', flexDirection:'row', padding:'1em'}}>
          <RightBox />        
          <Box sx={{ display: 'flex', flexDirection:'column'}}>
            <Box sx={{ display: 'flex', flexDirection:'column', backgroundColor:'black',
              width: '31em', borderTop: '1px solid rgb(96, 40, 169)',borderRight:'1px solid rgb(96, 40, 169)', boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)',
              minHeight:'25em', alignItems:'center', marginLeft:'11px', alignItems:'center', justifyContent:'center'}}>
              <Box sx={{height:'95%', width:'95%', display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Box sx={{display: 'flex', height:'95%', width:'95%', alignItems:'center', flexDirection:'column', gap: '0.5em'}}>
                  <h2>SPARKLE BISWAS</h2>
                  <p>Designer | Programmer | Problem Solver | Leader</p>
                  <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <SchoolIcon sx={{color: 'rgb(157, 105, 225)'}}/>
                    <p>Purdue University CS '23</p>
                  </Box>
                  <Box sx={{ display:'flex', flexDirection:'column', marginTop:'2.5em'}}>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                      <EmailPuzzle emailToggle={emailToggle}/>
                      <GithubPuzzle gitToggle={gitToggle}/>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                      <LinkedinPuzzle linkToggle={linkToggle}/>
                      <ResumePuzzle resumeToggle={resumeToggle}/>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <BottomBox/>
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', width:'40em', backgroundColor:'black', height:'fit-content', gap:'3em', paddingLeft:'1em'}}>
          <Box sx={{display:'flex',  gap:'1em'}}>
            <TopLeftPiece />
            <TopRightPiece />
          </Box>
          <Box sx={{display:'flex',  gap:'1em'}}>
            <BottomLeftPiece/>
            <BottomRightPiece/>
          </Box>
        </Box>
        
      </Box>
    </div>
  );
}
// borderLeft: 20, borderBottom: 20, borderRadius: '2px',
export default App;
