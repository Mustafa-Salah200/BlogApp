/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { clearActive } from "../../Store/Slice/ActiveUser-Slice";

const Profile = ({ showLinks, Navigate, HandleSideBar }) => {
  const dispatch = useDispatch();
  const ActiveUser = useSelector(store => store.ActiveUser)
  
  return (
    <>
      <div className="write" onClick={() => Navigate("/write")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="Write"
        >
          <path
            fill="currentColor"
            d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
          ></path>
          <path
            stroke="currentColor"
            d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
          ></path>
        </svg>
        Write
      </div>
      <div className="pro" onClick={() => HandleSideBar()}>
        M
      </div>
      {showLinks && (
        <ul className="links">
          <ul className="first">
            <li onClick={() => Navigate(`/${ActiveUser.Email}`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Profile"
              >
                <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"
                ></path>
              </svg>
              Profile
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Lists"
              >
                <path
                  stroke="currentColor"
                  d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                ></path>
              </svg>
              Library
            </li>
            <li onClick={()=> Navigate("/my-stories")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Stories"
              >
                <path
                  stroke="currentColor"
                  d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="M8 8.5h8M8 15.5h5M8 12h8"
                ></path>
              </svg>
              Stories
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Stats"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M2.75 19h4.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25ZM9.75 19h4.5a.25.25 0 0 0 .25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25ZM16.75 19h4.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25Z"
                ></path>
              </svg>
              Stats
            </li>
          </ul>
          <ul>
            <li>help</li>
            <li>Setting</li>
          </ul>
          <ul>
            <li>Become a meddium member </li>
          </ul>
          <ul>
            <li onClick={() => dispatch(clearActive())}>Sign out</li>
          </ul>
        </ul>
      )}
    </>
  );
};

export default Profile;
