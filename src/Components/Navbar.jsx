import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { authState, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div className="name" onClick={() => navigate("/")}>React-OLX</div>
      <div data-testid="login-logout">
        {!authState.isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <span>Welcome, {authState.userDetails.email}!</span>
            <button
              className="logout"
              onClick={() => {
                logoutUser();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;