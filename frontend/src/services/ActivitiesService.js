import axios from 'axios';

export class ActivitiesService {
    async showActivities() {
        return axios.get('http://localhost/8080/api/activities')
        .then(response => response.data)
    }
}