import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import Profile from "../Profile/Profile";
import {  useSelector } from "react-redux";

const LeaveIcon = <svg width={25} aria-hidden="true" focusable="false" data-prefix="far" data-icon="right-to-bracket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="initial-icon svg-inline--fa fa-right-to-bracket fa-xl"><path fill="currentColor" d="M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" className=""></path></svg>

const EnterIcon = <svg width={25} aria-hidden="true" focusable="false" data-prefix="far" data-icon="person-to-portal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hover-icon svg-inline--fa fa-person-to-portal fa-xl"><path fill="currentColor" d="M272 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-90.7 12.6c-14-3.5-28.7-3.5-42.7 0l-1.8 .5c-13.3 3.3-25.6 9.7-35.9 18.6L56.4 165.8c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l44.5-38.2c4.7-4 10.3-6.9 16.3-8.4l1.8-.5c6.4-1.6 13-1.6 19.4 0l8.6 2.1-32.7 98c-8.5 25.5 2.3 53.4 25.7 66.5l88 49.5L225.1 480.8c-4 12.7 3.1 26.1 15.7 30.1s26.1-3.1 30.1-15.8L307 379.5c5.6-18-2.1-37.5-18.6-46.8l-32.1-18 28.1-84.4 5.6 18.2c7.2 23.5 28.9 39.5 53.5 39.5l8.4 0 16.5 0 23.5 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-23.9 0c1.2-82.9 11.4-134.5 24.1-164c12.4-28.7 22.4-28.1 23.7-28l.1 0 .1 0c1.3-.1 11.3-.7 23.7 28c13.5 31.4 24.2 87.7 24.2 180s-10.7 148.6-24.2 180c-12.4 28.7-22.4 28.1-23.7 28l-.1 0-.1 0c-1.3 .1-11.3 .7-23.7-28c-10.1-23.4-18.6-60.5-22.2-116l-18 0-30.1 0c8.8 140.7 47.6 192 94.1 192c53 0 96-66.6 96-256S469 0 416 0c-46.2 0-84.8 50.6-93.9 189.1l-5.8-18.9c-5.8-18.7-20.9-33.1-39.9-37.9l-95-23.7zm70.8 67.2l-38.3 115-19-10.7c-3.3-1.9-4.9-5.9-3.7-9.5L225 169l27.1 6.8zM122.5 317.1L103.4 368 24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l84.9 0c16.7 0 31.6-10.3 37.4-25.9l14.1-37.6-4.9-2.8c-14.1-8-25.4-19.3-33-32.6z" className=""></path></svg>


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const [svgIcon,setSvgIcon] = useState(LeaveIcon)
  const Active_User = useSelector(store => store.ActiveUser)  
  
  
  const navigate = useNavigate();

  const Navigate = (path)=>{
    setShowLinks(false)
    navigate(path)
  }
  const HandleSideBar = () => {
    showLinks ? setShowLinks(false) : setShowLinks(true);
  };
  return (
    <nav>
      <h1 onClick={() => Navigate("/")}>Meddium</h1>
      <div className="profile">
        {Active_User.id ? (
          <Profile showLinks={showLinks} Navigate={Navigate} HandleSideBar={HandleSideBar}/>
        ) : (
          <div className="mySvg" 
          onClick={()=> Navigate('/signIn')}
          style={{cursor: 'pointer'}}
          onMouseEnter={()=> setSvgIcon(EnterIcon)}
          onMouseLeave={()=> setSvgIcon(LeaveIcon)}
          >{svgIcon}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
