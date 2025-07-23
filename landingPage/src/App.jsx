// import Card from "./component/card"

// function App() {


//   return (
//     <>
//       <Card title="heading" des="qwertyuiopasdfghjklzxcvbnm"/> 
//       {/* <Card title="heading2" des="qwertyu"/>  */}
      
//      </>
//   )
// }

// export default App


import Nav from "./home/nav";
import Hero from "./home/hero";
import Headings from "./home/headings";
import ServiceCards from "./home/serviceCards";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Creation from "./home/creation";
import Review from "./home/review";
import Portfolio from "./home/portfolio";
import Members from "./home/members";
import ContactUs from "./home/contactus";
import Footer from "./home/footer";
function App() {
  
  
  return (
    <>

      <Nav/>
      <Hero/>
      <div className="main">

      <div className="sec1">
      <Headings heading={"Our Services"} text={"Captivate heart & minds with Explainer Toon's empathetic video Creation"}/>
     
      <div className="flex">
      <MdKeyboardArrowLeft  size={70}  />
      <ServiceCards title={"2D Animation"} description={"We breath life into your narrative, saprking emotion and  connection"}/>
      <ServiceCards title={"Doodle Videos"} description={"Infuse personality and charm into your message, making it unforgettable."}/>
      <ServiceCards title={"Scroll Stoppers"} description={"Command attention and leave a lasting impression in the blink of an eye."}/>
      <MdKeyboardArrowRight size={70}/>
      </div>
</div>

<div className="sec2">
      <Headings heading={"Create studio featured"} text={"Dive into Create Studio's suite of featured tools, empowering you to unleash your creativity with intuitive drag-and-drop interfaces and powerful animation libraries"}/>
      <Creation heading={" Honored as the Top Creators' Choice! "} para={"We're thrilled to be recognized by Create Studio as their top creators, showcasing our commitment to authenticity, empathy, and the power of storytelling. With this full-featured animation and editing software, we effortlessly craft mesmerizing 3D character videos and scroll-stopping social content that captivates audiences worldwide. Join us on our journey to unleash creativity and make meaningful connections through the art of animation."}/>
</div>

<div className="sec3">
  <Headings heading={"Testimonials"} text={"Inspirational Stories from Satisfied Clients – Hear Their Journey."}/>

  <div className="flex">
  <MdKeyboardArrowLeft  size={70}  />
  <Review names={"client1"} text={"Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"}/>
  <Review names={"client1"} text={"Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"}/>
  <Review names={"client1"} text={"Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor"}/>
  <MdKeyboardArrowRight size={70}/>
  </div>
  
</div>

<div className="sec4">
  <Headings heading={"Our Portfolio"} text={"Discover the essence of creativity and impact in our diverse portfolio."}/>
  <div className="flex">
   <Portfolio/>
  </div>
</div>

<div className="sec5">
  <Headings heading={"About Us"} text={"Crafting captivating stories through animation, we are Explainer Toon - where imagination meets expertise."}/>
  <Creation heading={" Why Choose Explainer Toon?"} para={"We Connect with Your Audience Your business deserves someone who knows the art of compelling engagement.Our priority is ensuring your audience remains captivated by your message.At Explainer Toon, we swiftly grasped this concept and recognized that striking animated videos lie at the heart of impactful communication."}/>
</div>

<div className="sec6">
    <Headings heading={"Meet Our Creative Maestros"} text={" our diverse team of passionate storytellers and animation wizards bring your ideas to life with flair, finesse, and boundless creativity."}/>

  <div className="card">
<Members memName={"member Name"} position={"Possition in company"}/>
<Members memName={"member Name"} position={"Possition in company"}/>
<Members memName={"member Name"} position={"Possition in company"}/>
<Members memName={"member Name"} position={"Possition in company"}/>
  </div>


</div>

<div className="sec7">
    <Headings heading={"contact us"} text={"Get in touch with Explainer Toon today and let's bring your ideas to life through captivating animation."}/>
<ContactUs/>


</div>


  <Footer/>




</div>

    </>
    
  );
}

export default App; 
