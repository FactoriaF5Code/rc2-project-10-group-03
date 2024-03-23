import { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import { ActivitiesContext } from "../../../middleware/context/ActivitiesContext";

export const Calendar = () => {
  const { showActivities } = useContext(ActivitiesContext);
  const [mondayData, setMondayData] = useState([]);
  const [tuesdayData, setTuesdayData] = useState([]);
  const [wednesdayData, setWednesdayData] = useState([]);
  const [thursdayData, setThursdayData] = useState([]);
  const [fridayData, setFridayData] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await showActivities();
      setMondayData(
        response.filter((activity) =>
          activity.dayOfTheWeek.toLowerCase().includes("monday")
        )
      );
      setTuesdayData(
        response.filter((activity) =>
          activity.dayOfTheWeek.toLowerCase().includes("tuesday")
        )
      );
      setWednesdayData(
        response.filter((activity) =>
          activity.dayOfTheWeek.toLowerCase().includes("wednesday")
        )
      );
      setThursdayData(
        response.filter((activity) =>
          activity.dayOfTheWeek.toLowerCase().includes("thursday")
        )
      );
      setFridayData(
        response.filter((activity) =>
          activity.dayOfTheWeek.toLowerCase().includes("friday")
        )
      );
    };
    fetchData();
  }, []);

  return (
    <section className="activities-calendar">
      <table>
        <caption>
          <h2 className="activities-title">Activities Calendar</h2>
        </caption>
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
          <tr className="">
            <td> 
              {mondayData.map((activity) => (
                <div className="day-container" key={activity.id}>
                    {activity.activityName} -&nbsp;
                    {activity.time}
                </div>
              ))}
            </td>
            <td> 
              {tuesdayData.map((activity) => (
                <div className="day-container"  key={activity.id}>
                    {activity.activityName} -&nbsp;
                    {activity.time}
                </div>
              ))}
            </td>
            <td> 
              {wednesdayData.map((activity) => (
                <div className="day-container"  key={activity.id}>
                    {activity.activityName} -&nbsp;
                    {activity.time}
                </div>
              ))}
            </td>
            <td> 
              {thursdayData.map((activity) => (
                <div className="day-container"  key={activity.id}>
                    {activity.activityName} -&nbsp;
                    {activity.time}
                </div>
              ))}
            </td>
            <td> 
              {fridayData.map((activity) => (
                <div className="day-container"  key={activity.id}>
                    {activity.activityName} -&nbsp;
                    {activity.time}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
