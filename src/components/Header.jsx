import { Link } from 'react-router-dom';
import { useAuth } from '../../context/Auth/Auth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
