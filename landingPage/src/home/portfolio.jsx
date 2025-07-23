import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
const Portfolio = () => {
const image={
  boxShadow:'rgba(0, 0, 0, 0.1) 2px 2px 4px',
  borderRadius:'2px'
}
const main={
   borderRadius:'20px'
}

  return (

    <>
      <div style={main}><img src={p1} alt="" style={image} /></div>
      <div style={main}><img src={p2} alt="" style={image}/></div>
      <div style={main}><img src={p3} alt="" style={image}/></div>
    </>
    
  )
}

export default Portfolio
