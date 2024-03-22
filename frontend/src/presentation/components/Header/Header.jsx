import './Header.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <Link to="/"><img src={logo} alt="Fitness Manager" /></Link>
    </header>
  )
}
