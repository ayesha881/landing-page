import pic from '../assets/review.png'
import { MdStar } from "react-icons/md";

const Review = ({names,text}) => {
const main={
// margin:'40px',
backgroundColor:'#FFFFF',
width:'310px',
height:'466px',
borderRadius:'20px',
display:'flex',
flexDirection:'column',
alignItem:'center',
justifyContent:'center',

  }
const pics={
  borderRadius:'20px',
  boxShadow:'rgba(0, 0, 0, 0.1) 2px 2px 4px',
  }
const title={
fontSize:'24px',
textAlign:'center',
paddingBottom:'14px'

  }

  const para={
  padding:'0px 20px',
  fontSize:'18px'
    }

const star={
  color: '#FF0084',
  fontSize: '20px',
  
  }
const stars={
// backgroundColor: 'black',
margin: '12px',
display:'flex',
justifyContent: 'flex-end',
padding:'0 5px'
  }


  return (
    <>
      <div style={main}>
        <p style={title}>{names}</p>
        <div ><img src={pic} alt="" style={pics}/></div>
        <div style={stars}>
          <MdStar style={star}/>
          <MdStar style={star}/>
          <MdStar style={star}/>
          <MdStar style={star}/>

        </div>
        <p style={para}>{text}</p>
      </div>
    </>
  )
}

export default Review
