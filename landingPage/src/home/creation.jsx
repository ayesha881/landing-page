// import { CgFormatJustify } from 'react-icons/cg'
import image from '../assets/creationimg.png'
const Creation = ({heading,para}) => {
const main={
  display:'flex',
  alignItem:'center',
  justifyContent:'center',
    textAlign:'center',
    gap:'14px',
    margin:'0 45px'
}
  const pic={
borderRadius:'20px'
}
const content={
    display:'flex',
    flexDirection:'column',
    alignItem:'center',
    textAlign:'center',
    gap:'77px',
// padding:' 0 3rem'
}
const head={
  color:'black',
  fontSize:'24px',
  fontWeight: 'normal',
  letterSpace:'5',
  textDecoration: 'underline 2px',
  textDecorationColor: '#EC449B'
  
}
const des={
fontSize:'22px',
textAlign:'left',
// marginTop:'10px',
}
  return (
    <>
    <div style={main}>
      <div style={content}>
        <h6 style={head}>{heading}</h6>
        <p style={des}>{para}</p>
        </div>
        <div ><img src={image} style={pic} alt="" /></div>
        </div>
    </>
  )
}

export default Creation
