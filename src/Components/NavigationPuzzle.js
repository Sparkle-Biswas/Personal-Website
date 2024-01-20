import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const MainBox = styled(Box)({
    width: '30em',
    height: '30em',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    '&:hover': {
        cursor: 'pointer'
    },
});

const RowBox = styled(Box) ({
  width: '30em',
  height: '15em',
  display:'flex',
  justifyContent: 'center',
  backgroundColor:'green',

});

const PieceBox = styled(Box) ({
  width: '14em',
  height: '14em',
  display:'flex',
  overflow:'hidden',
  backgroundColor:'red',

});
const RoundBox = styled(Box) ({
  
  width: '6em',
  height: '6em',
  marginLeft:'10em',
  marginTop:'4em',
  display:'flex',
  borderRadius:'45%',
  border:'1px solid black',
  backgroundColor:'red',

});

function NavigationPuzzle() {
  return (
    <MainBox>
      
    </MainBox>
  )
}

export default NavigationPuzzle
