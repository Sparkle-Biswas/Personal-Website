import React from 'react'

function PhotoPiece(props) {
    const MainBox = {
        display: 'flex',
        width: '16em',
        height: '10em',
        backgroundColor: 'black',
        overflow: 'hidden',
        paddingLeft: '3px',
        paddingBottom: '2px',
        paddingTop: '2px',
        marginRight: '-16em',
        marginBottom: '-4.5em',
        transform:'rotate(15deg)',
      };
    
      const InnerBox = {
        display: 'flex',
        width: '10em',
        height: '10em',
        backgroundColor: 'rgb(85, 9, 185)',
        zIndex: '1',
        border: '1px solid rgb(85, 9, 185)',
        borderRadius: '1em',
        boxShadow: '0px 2px 13px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
        position: 'relative',
      };
      
      const verticalBar = {
        position: 'absolute',
        width: '1em',
        height: '7em',
        background: 'rgb(85, 9, 185)',
        right: '0.19em',
        bottom: '1.8em',
        zIndex: '100',
      };
      
      const verticalBar2 = {
        position: 'absolute',
        width: '2.2em',
        height: '7em',
        background: 'rgb(85, 9, 185)',
        right: '1em',
        bottom: '1.8em',
        zIndex: '100',
      };
      
      const firstCircle = {
        backgroundColor: 'black',
        borderRadius: '45%',
        height: '4em',
        width: '4em',
        transform: 'translate(3em, 7.7em)',
        boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
        border: '1px solid rgb(85, 9, 185)',
        zIndex: '102',
      };
      
      const secondCircle = {
        backgroundColor: 'rgb(85, 9, 185)',
        borderRadius: '45%',
        height: '4em',
        width: '4em',
        transform: 'translate(4.6em, 3.3em)',
        zIndex: '0',
        border: '1px solid rgb(85, 9, 185)',
        boxShadow: '0px 1px 11px rgb(85, 9, 185), inset 0px 1px 11px rgb(85, 9, 185)',
      };
      
      const infoContainer = {
        position: 'absolute',
        zIndex: '101',
        right: '0.2em',
        top: '0.24em',
        gap: '0.2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      };
  return (
    <div style={MainBox}>
          <div style={InnerBox}>
              <div style={verticalBar} />
              <div style={verticalBar2} />
              <div style={firstCircle}/>
              <div style={secondCircle}/>
              <div style={infoContainer}>
                {props.children}
              </div>
          </div>
      </div>
  )
}

export default PhotoPiece
