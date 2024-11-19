import { useNavigate } from "react-router-dom";
import "./SignUP.css";
import { useState } from "react";
import { ValidationError } from "./HandleError";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Store/Slice/User-Slice";

const SignUP = () => {
  const Users = useSelector((store) => store.Users);
  const [userDetails, setUserDetails] = useState({
    FName: "",
    LName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    const obError = ValidationError(userDetails);
    setError(obError);
    if (
      !obError.FName &&
      !obError.LName &&
      !obError.Email &&
      !obError.Password &&
      userDetails.Password === userDetails.ConfirmPassword
    ) {
      const userExist = Users.find((user) => user.Email === userDetails.Email);
      if (userExist) {
        setError({ Email: "* Email already exists" });
        return;
      } else {
        const ob = {
          id: Date.now(),
          FName: userDetails.FName,
          LName: userDetails.LName,
          Password: userDetails.Password,
          Email: userDetails.Email,
          profilePic: 'src/assest/profile.svg'
        };
        dispatch(addUser(ob));
        navigate("/signIn ");
        setUserDetails({
          FName: "",
          LName: "",
          Email: "",
          Password: "",
          ConfirmPassword: "",
        });
        return;
      }
    }
  };

  return (
    <div className="login">
      <h1>CREATE A NEW ACCOUNT</h1>
      <form action="" onSubmit={HandleSubmit}>
        <div className="name">
          <div className="input">
            <input
              style={
                error.FName
                  ? {
                      outline: "1px solid red",
                    }
                  : {}
              }
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="First Name"
              name="FName"
              value={userDetails.FName}
            />
            <p>{error.FName}</p>
          </div>
          <div className="input">
            <input
              style={
                error.LName
                  ? {
                      outline: "1px solid red",
                    }
                  : {}
              }
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="Last Name"
              name="LName"
              value={userDetails.LName}
            />
            <p>{error.LName}</p>
          </div>
        </div>

        <div className="input">
          <input
            style={
              error.Email
                ? {
                    outline: "1px solid red",
                  }
                : {}
            }
            onChange={(e) => handleInputChange(e)}
            type="email"
            placeholder="email..."
            name="Email"
            value={userDetails.Email}
          />
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
            onChange={(e) => handleInputChange(e)}
            type="password"
            placeholder="Password"
            name="Password"
            value={userDetails.Password}
          />
          <p>{error.Password}</p>
        </div>

        <div className="input">
          <input
            style={
              error.ConfirmPassword
                ? {
                    outline: "1px solid red",
                  }
                : {}
            }
            onChange={(e) => handleInputChange(e)}
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            value={userDetails.ConfirmPassword}
          />
          <p>{error.ConfirmPassword}</p>
        </div>

        <button type="submit">CREATE</button>
      </form>
      <p>
        I Already Have an Account{" "}
        <span className="" onClick={() => navigate("/signIn")}>
          SignIn
        </span>
      </p>
    </div>
  );
};

export default SignUP;
