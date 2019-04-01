export default class NotificationService {

    _apiBase = 'https://localhost:44391/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
            .then((result) => {
                return result.json();
            })
            .then((body) => {
                console.log(body);
                return body;
            });

        //if (!res.ok) {
        //    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
       // }
        return await res;
    }

    getNotificationList() {
        return this.getResource(`/notificationlist/`);
    }


}