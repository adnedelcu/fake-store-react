import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 text-white">
      <div className="navbar-start">
        <img src={logo} width="40px" alt="Logo" />
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li><Link to="/" className="hover:text-blue-400 mr-4">Home</Link></li>
          <li><Link to="/cart" className="hover:text-blue-400">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
}
