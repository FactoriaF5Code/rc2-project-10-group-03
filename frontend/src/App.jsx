import "./App.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { ActivitiesProvider } from './middleware/context/ActivitiesContext';

function App() {
  return (
    <ActivitiesProvider>
      <AppRouter />
    </ActivitiesProvider>
  );
}

export default App;
