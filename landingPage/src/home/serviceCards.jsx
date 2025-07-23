import React from 'react'
import image from '../assets/servicecard.png'
import { CgPlayButtonO } from "react-icons/cg";
import PropTypes from 'prop-types';


const ServiceCards = ({title,description}) => {
const bgimg={
  position: 'relative',
    width:'380px',
    height:'414px',
    backgroundColor:'red',
    borderRadius: '20px',
    backgroundImage:`url(${image})`,
    overflow: 'hidden',
};
const opacity={
  
  width:'311px',
  height:'127px',
  padding:'8px 80px 0 10px',
  backgroundColor:'rgba(255, 255, 255, 0.7)',
  borderRadius: '25px',
};

const titl={
  color:'black',
    fontSize:'24px',
  
}
const des={
fontSize:'20px',
color:'gray',
marginTop:'10px',
}
const iconStyle = {
  color: "#FF0084",
  position:'absolute',
  top:'28px',
  left:'280px'
};


const iconContent = {
  position: 'relative',
  marginTop:"223px"
 
};


  return (
    <>
      <div style={bgimg}>

     <div style={iconContent}>
        <div style={opacity}>
            <h4 style={titl}>{title}</h4>
            <p style={des}>{description}</p>
        </div>
            <CgPlayButtonO style={iconStyle} size={60}/>
      </div>
      </div>
    </>
  )
}

export default ServiceCards


ServiceCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ServiceCards.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
}



