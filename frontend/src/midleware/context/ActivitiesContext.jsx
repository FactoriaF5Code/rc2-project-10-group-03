import { ActivitiesService } from "../../services/ActivitiesService";
import { createContext } from 'react';

const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  
    const showActivities = async () => {
        const activitiesService = new ActivitiesService();
        return activitiesService.showActivities();
    }

  const value = {
    showActivities
  };

  return (
    <ActivitiesContext.Provider value={value}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export { ActivitiesContext };