import im from "../assets/logo.png"
function Nav(){

  const navbar = {
    display: "flex",
    width: "100%",  
    height:"auto",
    boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
    // backgroundColor: "red",  
    padding: "10px 50px ",
    justifyContent: "space-between", 
    alignItems: "center",  
  };
 const image={
  width:"110px",

  }
const content={
  display: "flex",
  // backgroundColor: "yellow",

  padding: "10px",
  listStyle:"none",
  justifyContent: "center", 
  alignItems: "center", 
  margin:"0"
}

const text={
  color:"black",
  padding: "20px",
  textDecoration:"none",
  fontWeight:"400",
  fontSize:"20px"
}

  return (
    <>
    <nav style={navbar}>
        <div>
    <img src={im} alt="" style={image}/>
    </div>
    
    <div>
        <ul  style={content}>
        <li><a href="" style={text}>Home</a></li>
        <li><a href=""style={text}>Gallery</a></li>
        <li><a href=""style={text}>Learn</a></li>
        <li><a href=""style={text}>About US</a></li>
        <li><a href=""style={text}>Contact US</a></li>
        </ul>
    </div>
    
    </nav>
    </>
  );
}

export default Nav

