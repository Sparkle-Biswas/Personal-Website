import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

function BottomRightPiece() {
  return (
    <Box sx={{display:'flex', width:'16em', height:'12.1em', backgroundColor:'black', overflow:'hidden', 
    paddingLeft:'3px', paddingBottom:'2px', paddingTop:'2px', transform:'rotate(180deg)'}}>
        <Box sx={{display:'flex', width:'12em', height:'12em', backgroundColor:'rgb(96, 40, 169)', zIndex:'100',
        borderRadius:'1em', boxShadow: '0px 2px 13px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)'}}>
            <Box sx={{backgroundColor:'black', borderRadius:'45%', height:'6em', width:'5em', transform:'translate(3.5em, 9em)', boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)'}}/>
            <Box sx={{backgroundColor:'rgb(96, 40, 169)', borderRadius:'45%', height:'5em', width:'6em', 
            transform:'translate(4.5em, 3.5em)', zIndex:'0',
            boxShadow: '0px 1px 11px rgb(96, 40, 169), inset 0px 1px 11px rgb(96, 40, 169)', zIndex:'0'}}/>
        </Box>
    </Box>
  )
}

export default BottomRightPiece
