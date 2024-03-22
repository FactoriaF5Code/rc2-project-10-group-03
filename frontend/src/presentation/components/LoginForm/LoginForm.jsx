import "./LoginForm.css";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <main>
      <section className="form-container">
        <form className="login-form">
          <h2 className="form-title">Wake up and work out!</h2>
          <div className="email-login">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="password-login">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <Link to="/calendario"><button>Entrar</button></Link>
        </form>
      </section>
    </main>
  );
};
