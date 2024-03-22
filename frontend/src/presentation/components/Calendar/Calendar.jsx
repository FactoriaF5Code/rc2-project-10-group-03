import { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import { ActivitiesContext } from "../../../midleware/context/ActivitiesContext";

export const Calendar = () => {
  const { showActivities } = useContext(ActivitiesContext);
  const [activities, setActivities] = useState([]);
  const [mondayData, setMondayData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    showActivities()
      .then((response) => setActivities(response))
      .catch((error) => setError("Ha ocurrido un error" + error));
      setMondayData(activities.filter(activity => activity.dayOfTheWeek.toLowerCase().includes('Monday')));
      console.log(mondayData);
  }, []);

  
  // const tuesdayData = activities.filter(activity => activity.dayOfTheWeek.toLowerCase().includes('Tuesday'));
  // const wednesdayData = activities.filter(activity => activity.dayOfTheWeek.toLowerCase().includes('Wednesday'));
  // const thursdayData = activities.filter(activity => activity.dayOfTheWeek.toLowerCase().includes('Thursday'));
  // const fridayData = activities.filter(activity => activity.dayOfTheWeek.toLowerCase().includes('Friday'));

  return (
    <section className="activities-calendar">
      <table>
        <caption><h2 className="activities-title">Activities Calendar</h2></caption>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          
            {mondayData.map((activity) => (
              <tr>
              <td key={activity.id}>
                {activity.activityName} -&nbsp;
                {activity.time}
              </td>
              </tr>
            ))}
          

        </tbody>
      </table>
    </section>
  );
};
