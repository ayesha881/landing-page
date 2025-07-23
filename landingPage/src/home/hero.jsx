import heroImage from '../assets/hero.png'
import blurimage from '../assets/blurimg.png'
import Btn from './btn'
function Hero(){
    const hero={
        display:"flex",
        
    }
    const image={
        width:"50%",
    }
const btn={
width: '100%',
// height: '500px',
backgroundImage: `url(${blurimage})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
// position: 'relative',
display: 'flex',
flexDirection:"column",
alignItems: 'center',
justifyContent: 'center',

}
const subheading = {
    fontSize: '18px',
    marginBottom: '32px',
};

const para = {
    padding:'5px',
    color:'#ffff',
textAlign:'center',
letterSpacing: '3px',
// wordSpacing: '10px'
};
    return(
        <>
        <div >
        <div style={hero}>

           <div style={btn}>
           <div style={subheading}>
                <p style={para}>Unlock Your Story's Potential with Explainer Toon </p>
                <p style={para}>Let's Tonify Your Story Today!</p>
                </div>
              <Btn text="Contact Us" onClick={() => alert("Contact button clicked")} />
           </div>
           
            <img src={heroImage} alt=""style={image} />
        </div>
        </div>

        </>
    )
}

export default Hero