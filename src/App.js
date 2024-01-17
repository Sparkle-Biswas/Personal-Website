import './App.css';
import ExtensionIcon from '@mui/icons-material/Extension';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/system';

const BottomBox = styled(Box)({
  width: '25.18em',
  height: '2.18em',
  transform: 'skew(-41deg)',
  backgroundColor: 'rgb(127, 125, 225)',
  marginLeft:'-7px',
  border: '1px solid rgb(80, 78, 85)'

});
const RightBox = styled(Box)({
  width: '2em',
  height: '25em',
  backgroundColor: 'rgb(127, 125, 225)',
  transform: 'skew(0deg,-47deg)',
  marginRight:'-11px',
  marginTop:'17px',
  border: '1px solid rgb(80, 78, 85)'
  
});

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexDirection:'row', padding:'1em'}}>
        <RightBox />        
        <Box sx={{ display: 'flex', flexDirection:'column'}}>
          <Box sx={{ display: 'flex', flexDirection:'column', backgroundColor : 'rgb(62, 61, 136)',
            boxShadow: 'rgb(77, 76, 133)', minWidth: '25.1em',
            minHeight:'25em', alignItems:'center', marginLeft:'11px', alignItems:'center', justifyContent:'center'}}>
            <Box sx={{border: '2px solid white',height:'95%', width:'95%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
              <Box sx={{display: 'flex', height:'95%', width:'95%', justifyContent:'center'}}>
                <p>Sparkle Biswas</p>
              </Box>
            </Box>
          </Box>
          <BottomBox/>

        </Box>
      </Box>
    </div>
  );
}
// borderLeft: 20, borderBottom: 20, borderRadius: '2px',
export default App;
