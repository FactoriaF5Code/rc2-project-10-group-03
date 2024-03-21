import "./LoginForm.css";

export const LoginForm = () => {
  return (
    <main>
      <section className="form">
        <form>
          <label for="email">Email</label>
          <input type="text" name="email" />
          <label for="password">Contraseña</label>
          <input type="password" name="password" />
        </form>
      </section>
    </main>
  );
};
