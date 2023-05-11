import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"70px 0"}}>
    <div style={{color:"red",fontSize:"30px"}}>Xoş gəlmişsiniz!</div>
    <div style={{marginTop:"50px"}}>Qeydiyyatdan kecmisiz?  <Link to="/register">   Sign Up</Link></div>
    <div style={{marginTop:"10px"}}>Qeydiyyatiniz yoxdursa, <Link to="/login"> Sign In</Link></div>
    </div>
  )
}

export default Home
