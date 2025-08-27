import React, { useContext } from 'react';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login (replace with real auth logic later)
    login();
    navigate('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card p-4">
          <h2 className="text-accent">
            <FaUser className="me-1 fa-icon" /> Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-neutral">
                <FaUser className="me-1 fa-icon" /> Email
              </label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-neutral">
                <FaLock className="me-1 fa-icon" /> Password
              </label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">
              <FaSignInAlt className="me-1 fa-icon" /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;