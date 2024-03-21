import { Outlet}  from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const HomePage = () => {
  return (
    <>
    <Header />
    <LoginForm />
    <Outlet />
    </>
  )
}
