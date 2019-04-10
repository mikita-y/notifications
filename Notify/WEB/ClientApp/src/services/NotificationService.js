

export default class NotificationService {

    _apiBase = 'https://localhost:44391/api';

    async getNotificationList(sort)
    {
        const body = {
            userId: `9e1d0156-27e1-41f4-9a2e-f727a1f898ce`,
            sorting: sort.sorting,
            filterBy: sort.filterby ,
            page: sort.page,
            pageSize: sort.pageSize,
            searchText: sort.searchText
        }

        const res = fetch('api/notificationlist/postlist', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then((result) => {
                return result.json();
            })
            .then((body) => {
                return body;
            });
        return await res;
    }

   

    async getNotification(id) {
        const notification = fetch(`api/notificationcrud/${id}`)
        .then((result) => {
            return result.json();
        })
            .then((body) => {
                //console.log('getNotification', body);
            return body;
        });
    return await notification;
    }



}