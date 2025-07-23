import logo from "../assets/logo.png";

const Footer = () => {
  const main = {
    background: "#fffff",
    width: "100%",
    // padding: "40px 60px",
    // fontFamily: "Arial, sans-serif",
    // color: "#333"
  };

  const footerContent = {
    padding: "40px 60px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  };

  const sec1 = {
    flex: 1.5,
    marginRight: "40px"
  };

  const secImage = {
    width: "150px",
    marginBottom: "20px"
  };

  const secPara = {
    paddingRight: "61px",
    fontSize: "18px",
    color: "#010101"
  };

  const section = {
    flex: 1,
    marginTop: "20px",

  };

  const sectionTitle = {
    
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
    color: "#000"

  };

  const sectionItem = {
    fontSize: "16px",
    color: "#777",
    margin: "14px 0"
  };

  const contactItem = {
    fontSize: "16px",
    color: "#000",
    margin: "18px 0"
  };

  const disclaimer = {
    padding:"0px 302px",
    marginTop: "40px",
    fontSize: "14px",
    color: "#333",
    textAlign: "left"

  };

  const copy = {
    background: "linear-gradient(to top,  #ff007f, #fe2290ad)",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "15px",
    color: "white",
    padding: "24px 0",
  };

  return (
    <>
      <div style={main}>
        <div style={footerContent}>
          <div style={sec1}>
            <div>
              <img src={logo} alt="Logo" style={secImage} />
            </div>
            <p style={secPara}>
              Lorem ipsum dolor sit amet consectetur. Nisi venenatis egestas
              consequat in pulvinar. Tristique in id sem. Lorem ipsum dolor sit
              amet consectetur. Nisi venenatis egestas consequat in pulvinar.
              Tristique in id sem.
            </p>
          </div>

          <div style={section}>
            <p style={sectionTitle}>Services</p>
            <p style={sectionItem}>2D Animation</p>
            <p style={sectionItem}>3D animation</p>
            <p style={sectionItem}>Doodle Videos</p>
            <p style={sectionItem}>Explainer videos</p>
            <p style={sectionItem}>Motion Graphics</p>
          </div>

          <div style={section}>
            <p style={sectionTitle}>Useful Links</p>
            <p style={sectionItem}>About Us</p>
            <p style={sectionItem}>Contact Us</p>
            <p style={sectionItem}>Services</p>
            <p style={sectionItem}>Learn</p>
            <p style={sectionItem}>Testimonials</p>
          </div>

          <div style={section}>
            <p style={sectionTitle}>Get in Touch</p>
            <p style={contactItem}>street Block area Lahore</p>
            <p style={contactItem}>abc@123gmail.com</p>
            <p style={contactItem}>+92 314 00000000</p>
          </div>
        </div>

        <div style={disclaimer}>
          Disclaimer: All content on Explainer Toon's website is our sole
          property. Unauthorized use or reproduction is prohibited. Third-party
          material belongs to respective owners, and we disclaim any
          resemblance.
        </div>

        <div style={copy}>
          <p>Copy Right © 2023 Creative Techniks. All rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
