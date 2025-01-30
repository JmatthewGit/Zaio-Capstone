import React, { useState } from "react";
import { Person, Menu } from "@mui/icons-material";
import variables from "../styles/Variables.css";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/state";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <a href="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          className="header_logo"
          alt="logo"
        />
      </a>

      <div className="navbar_search">
        <p>Places to Stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>

      <div className="navbar_right">
        {user && user.email ? (
          <span className="user-email">{user.email}</span>
        ) : (
          <a href="/login" className="host">
            Become A Host
          </a>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user || !user.profileImagePath ? (
            <Person />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath}`}
              alt="profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to="/view-listing">Property List</Link>
            <Link to="/view-reservation">Reservation List</Link>
            <Link to="/create-listing">Become a Host</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


