import React from 'react'

const Headings = ({heading,text}) => {
    const div={
     textAlign:'center',
     marginTop:'77px',
     marginBottom:'72px',
    };
    const para={
        marginTop:'24px',
       color:'gray',
       padding:'0 17rem'
    };
    const head={
        fontSize:'32px',
        margin:'0 10px'
    };
 
  return (
    <>
      
      <div style={div}>

<div className="line-container">

  <div className="leftline"></div> 
  <h2 style={head}>{heading}</h2>
  <div className="rightline"></div>
</div>

        
        <p style={para}>{text}</p>
      </div>
    </>
  )
}

export default Headings
