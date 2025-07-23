const ContactUs = () => {
  const main={
       display:'flex',
       justifyContent:'center',
       alignItem:'center',
       margin:'0px 36px'
    
  }
    const left={
        background: "linear-gradient(#EC449B, #FF0084)",
        height:'520px',
        width:"633px",
       //  margin:'10px',
       padding:'30px',
       display:'flex',
      gap:'38px',
      flexDirection:'column',
      borderRadius: "15px",
    }
    const p={
       fontSize:'20px',
       color:'white',
    }
    const con={
  fontSize:'40px',
  color:'white',
    }
    const para={
  fontSize:'18px',
  color:'white'
    }
     const right={
        display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItem:'center',
       textAlign:'center',
        // border:"2px solid #FF0084 ",
        height:'527px',
        width:"614px",
        margin:'10px',
    }
     const input={
        border:"2px solid #FF0084 ",
       padding: "25px 10px",
         borderRadius: "10px",
          width: "100%",
           boxSizing: "border-box",
    }

    const mess={
      ...input,
        border:"2px solid #FF0084 ",
       padding:'10px 419px 210px 10px'
    }
    const btnStyle = {
        padding: "25px 274px",
        backgroundColor: "#FF0084",
        fontSize:'22px',
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        margin:"14px 0px",
        textAlign:'center',
        cursor: 'pointer',
      };
  return (
    <>
    <div style={main}>
      <div style={left}>
        <h3 style={con}>Lorem, ipsum.</h3>
        <p style={para}>Contact us right away to see how we may assist you in realising
         your goal. For all of your software, design, and marketing requirements.</p>
        <p style={p}>phone</p>
        <p style={p}>email</p>
        <p style={p}>Address</p>
      </div>

      <div style={right}>
         <form action="" >
             <div style={{ display: "flex", gap: "10px" , marginBottom:"14px" }}>
      <input type="text" placeholder="First Name" style={input} />
      <input type="text" placeholder="Last Name" style={input} />
    </div>
             <div style={{ display: "flex", gap: "10px",marginBottom:"14px"  }}>
      <input type="email" placeholder="Email" style={input} />
      <input type="tel" placeholder="Contact Number" style={input} />
    </div>
            <textarea placeholder="Message" style={mess} />
            <button style={btnStyle} >send</button>     
                </form>
      </div>
      </div>
    </>
  )
}

export default ContactUs
