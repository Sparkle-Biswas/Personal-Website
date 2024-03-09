import React from 'react'

function Platform(props) {
  return (
    <div className='hoverDiv' style={{ width:'fit-content'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', flexDirection:'column', marginLeft:'1em', marginBottom:'0em', zIndex:'5', transform: 'rotateY(33deg)', alignItems:'center' }}>
          {props.children}
        </div>
        <div style={{width:'9.9em', height:'2em', backgroundColor:'black', marginBottom:'0.09em',borderLeft:'3px solid rgb(25, 79, 228)',
        transform: 'skew(-70deg,0deg)', marginLeft:'3.1em', border:'1.5px solid rgb(25, 79, 228)',  borderRight:'3px solid rgb(25, 79, 228)',
        }} />

        <div style={{display:'flex'}}>
            <div style={{width:'10.2em', height:'1.5em', backgroundColor:'black',
            marginLeft:'0.14em',marginTop:'-0.08em', borderLeft:'1.5px solid rgb(25, 79, 228)'
            ,borderBottom:'1.5px solid rgb(25, 79, 228)', 
            boxShadow: '3px 2px 15px rgb(25, 79, 228)'
            }} />

            <div style={{width:'5.8em', height:'1.49em', backgroundColor:'black', 
            transform: 'skew(0deg,-20deg)', marginTop:'-1.17em', marginLeft:'-0.1em',  borderRight:'1.5px solid rgb(25, 79, 228)',
            borderBottom:'1.5px solid rgb(25, 79, 228)', borderLeft:'1.5px solid rgb(25, 79, 228)', 
            boxShadow: '3px 2px 15px rgb(25, 79, 228)'
            }} />
                
        </div>
      </div>
    </div>
  )
}

export default Platform
