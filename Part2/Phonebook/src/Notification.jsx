const Notification = ({ message , errorMessage}) => {
    const okStyle = {color:"green",
  background: "lightgrey",
  fontSize: "20px",
  border:"2px solid green",
  borderRadius: "10px",  
  padding: "10px",
  marginBottom: "10px"}
  const errorStyle = {color:"red",
  background: "lightgrey",
  fontSize: "20px",
  border:"2px solid red",
  borderRadius: "10px",  
  padding: "10px",
  marginBottom: "10px"}

  
  if (message === null && errorMessage === null) {
    return null
  }
 


  return (
   message ? <div style={okStyle}>{message}</div> : <div style={errorStyle}>{errorMessage}</div>
  )
}

export default Notification

