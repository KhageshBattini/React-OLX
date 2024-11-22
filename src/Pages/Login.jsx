import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import '../index.css'

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        formData
      );
      if (res.data.token) {
        loginUser({ email: formData.email, token: res.data.token });
        navigate("/");
      }
    } catch (error) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="login-container">
      <h2 style={{fontFamily: 'serif'}}>Login Page</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="email" style={{fontFamily: 'serif', fontWeight: '700'}}>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter Email"
          style={{width: '100%', textAlign: 'center', padding: '5px'}}
        />
        
        <label htmlFor="password" style={{fontFamily: 'serif', fontWeight: '700'}}>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter Password"
          style={{width: '100%', textAlign: 'center', padding: '5px'}}
        />
              
        <button type="submit" style={{backgroundColor: '#009432', color: '#ffff'}}>SUBMIT</button>
      </form>
      <div data-cy="go-to-home-page" style={{fontFamily: 'serif'}}>
          Go to <Link to="/">Home Page</Link>
        </div>
    </div>
  );
};

export default Login;
