import { useState } from "react";
import logo from '../Logo.jpg';
import './Home.css';

const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="admin-home">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav-bar">
          <a href="/">Home</a>
          <div className="dropdown">
            <a href="#!" className="dropdown-toggle" onClick={toggleDropdown}>
              Products
              <span className="list-icon">▼</span>
            </a>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/sun">Sun Glasses</a>
                <a href="/spectacles">Spectacles</a>
                <a href="/sport">Sports Vision</a>
                <a href="/accessories">Accessories</a>
                <a href="/contact">ContactLenses</a>
                <a href="/gift">GiftVouchers</a>
              </div>
            )}
          </div>
          <a href="/more">About Us</a>
          <a href="/about/:id">Cart</a>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

      <div className="main-content">
        <h1>Welcome, Admin!</h1>
        <p>You can manage various aspects of the application here.</p>
        <a href="/add" className="pay-details-button">Store Items</a>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/all-pay-details">All Pay Details</a></li>
              <li><a href="/appointments">Appointments</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Eye Exams</li>
              <li>Optical Products</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2024 Optical Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
