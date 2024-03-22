import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../presentation/pages/HomePage";
import { LoginForm } from "../../presentation/components/LoginForm/LoginForm";
import { Calendar } from "../../presentation/components/Calendar/Calendar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
            <Route path="" element={<LoginForm />} />
            <Route path="calendario" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};