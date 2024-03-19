import {React, useEffect, useState} from 'react';
import '../Styles/Piece.css';

function Piece(props) {

  return (
    <div className='mainBox'>
        <div className='innerBox'>
          <div className='verticalBar' />
          <div className='horizontalBar' />
          <div className='firstCircle'/>
          <div className='borderBar' />
          <div className='secondCircle'/>
          <div className='infoContainer'>
            {props.children}
          </div>
      </div>
    </div>
  )
}

export default Piece
