import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
// import axios from 'axios';


export const Register = () => {
  const [data,setData]=useState([]);
  console.log("login response :",data)
  const navigate=useNavigate();
  // useEffect(()=>{
  //   axios
  //        .post("http://localhost:8000/register")
  //        .then((res)=>{
  //           console.log(res)
  //           setData(res);
  //        })
  // },[data])

 
  const handleIn = () => {
 
      alert("Successfully logged-in");
      navigate("/user/login")
   
  };
  return (
    <div id="user">
       <div id="pageLog">
      <h2  id="head">SignUp</h2>
      <form action="">
        EMAIL : <input type="email" id="username" name="Username" required/>
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Register" id="cart1" onClick={handleIn} />
        <input type="reset" value="Reset" id="cart"/>
        <div>If Already Registerd ? <Link to="/user/login">login</Link></div>
      </form>
    </div>
    </div>
  );
};
export const Login = () => {

  const navigate=useNavigate();

  const handleClick = () => {
  alert("loggedin successfully")
    navigate('/')
  };
  return (
    <div id="user">
    <div id="pageLog">
      <h2 id="head">SignIn</h2>
      <form action="">
        EMAIL : <input type="email" id="username" name="Username"  required />
        <br />
        <br />
        PASSWORD :
        <input type="password" id="password" name="Password" required />
        <br />
        <br />
        <input type="submit" value="Login" id="cart1" onClick={handleClick}/>
        <input type="reset" value="Reset" id="cart"/>
        <div><Link to="/user/register">register</Link></div>
      </form>
    </div></div>
  );
};
const User=()=>{
  const [login,setLogin]=useState(true)
  useEffect(()=>{
     setLogin()
  },[])
  return(
    <div>
          {login?<Register/>
          :<Login/>}
    </div>
  )
}
export default User;

