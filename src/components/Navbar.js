import React, { useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaCloudSun} from 'react-icons/fa';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <FaCloudSun className="me-2" /><BootstrapNavbar.Brand as={Link} to="/">Saif Weather Reoprts</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="text-neutral">
            <FaHome className="me-1 fa-icon" /> Home
          </Nav.Link>
          {!isAuthenticated ? (
            <>
              <Nav.Link as={Link} to="/login" className="text-neutral">
                <FaSignInAlt className="me-1 fa-icon" /> Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className="text-neutral">
                <FaUserPlus className="me-1 fa-icon" /> Signup
              </Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={handleLogout} className="text-neutral">
              <FaSignOutAlt className="me-1 fa-icon" /> Logout
            </Nav.Link>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;