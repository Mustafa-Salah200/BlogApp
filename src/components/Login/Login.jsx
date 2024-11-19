import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ValidationError } from "../SignUp/HandleError";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive } from "../../Store/Slice/ActiveUser-Slice";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState({});
  const users = useSelector(store => store.Users)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const obError = ValidationError(userDetails)
    setError(obError);

    if (!obError.Email && !obError.Password) {
      const user = users.find(e => e.Email === userDetails.Email)
      if(user){
        if(user.Password === userDetails.Password){
          dispatch(setActive(user));
          navigate("/", {replace: true});
          
        }else {
          setError({...error,Password: 'invalid password'});
        }
      } else {
        setError({...error, Email: 'invalid email'});
      }
    }
  };
  return (
    <div className="login">
      <h1>Welcome Back , Login To Enjoy </h1>
      <form action="" onSubmit={HandleSubmit}>
      <div className="input">

        <input 
        style={
          error.Email
          ? {
            outline: "1px solid red",
          }
          : {}
        }
        type="email" name="Email" value={userDetails.Email} placeholder="email..." onChange={(e)=>handleInputChange(e)}/>
        <p>{error.Email}</p>
        </div>

        <div className="input">

        <input 
        style={
          error.Password
          ? {
            outline: "1px solid red",
          }
          : {}
        }
        type="password" name="Password" value={userDetails.Password} placeholder="Password" onChange={(e)=>handleInputChange(e)}/>
        <p>{error.Password}</p>
        </div>
        <button>CREATE</button>
      </form>
      <p>I Do not Have an Account <span className="" onClick={()=> navigate('/signUp')}>SignUp</span></p>
    </div>
  );
};

export default Login;
