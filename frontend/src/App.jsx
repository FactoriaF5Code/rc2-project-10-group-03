import "./App.css";
import { AppRouter } from "./midleware/router/AppRouter";
import { ActivitiesProvider } from './midleware/context/ActivitiesContext';

function App() {
  return (
    <ActivitiesProvider>
      <AppRouter />
    </ActivitiesProvider>
  );
}

export default App;
