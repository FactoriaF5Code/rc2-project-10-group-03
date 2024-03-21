import './Header.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header>
        <img src={logo} alt="Fitness Manager" />
        <span>
            <p>Nombre</p>
        </span>
    </header>
  )
}
