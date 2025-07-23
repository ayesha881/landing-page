function Btn({ text, onClick }){
    const btnStyle = {
        padding: "10px 20px",
        backgroundColor: "#FF0084",
        color: "#fff",
        border: "none",
        borderRadius: "20px",

      };
    return(
        <>
        <button style={btnStyle}  onClick={onClick}> {text}</button>
        </>
    )
}
export default Btn