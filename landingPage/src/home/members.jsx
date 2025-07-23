import { CgFormatJustify } from 'react-icons/cg'
import abc from '../assets/mem.png'
const Members = ({memName,position}) => {
const main={
    margin:'20px',
    width:'380px',
    height:'380px',
    backgroundColor:'white',
    position: 'relative',
    overflow:'hidden',
    alignContent: 'center',
    boxShadow:'rgba(0, 0, 0, 0.1) 2px 2px 11px',
    borderRadius:'20px',

}
const semiCircle={
    width:'380px',
    height:'326px',
    backgroundColor:'#FFC2E1',
    opacity:'24',
    borderRadius:'50%',
    position: 'absolute',
    left: '50%',
    top:'-11px',
    transform: 'translate(-50%, -50%)',
   
}
const profile={
       zIndex:'1',
       position:'relative',
       display: 'flex',
       zIndex: '1',
       position: 'relative',
       alignContent: 'center',
       justifyContent: 'center',
       alignItems: 'center',
       top:'-50px'
      
}
const content={
    fontSize:'20px',

}
const body={
    display: 'flex',
    flexDirection:'column',
    alignContent: 'center',
    gap:'10px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginTop: '-40px'
}
const title={
   fontSize:'24px',
   fontWeight:'600',
   alignItem:'center'
}
const image={

  borderRadius: '50%',
}
const circle={

  border: '4px solid #ff007f',
  width: '190px',
  height: '190px',
  borderRadius: '50%',
  zIndex:'1',
  position: 'absolute',
}

  return (
    <>
      <div style={main}>
        <div style={semiCircle}></div>
        <div style={profile}>
            <div style={circle}></div>
            <img src={abc} alt="" style={image}/>
        </div>
        <div style={body}>
            <p style={title}>{memName}</p>
            <p style={content}>{position}</p>
        </div>
      </div>
    </>
  )
}

export default Members
