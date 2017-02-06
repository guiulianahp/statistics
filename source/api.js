import fetch from 'isomorphic-fetch';
import moment from 'moment'

const baseUrl= 'https://jsonplaceholder.typicode.com';
const url = 'https://dev-api-1.simpliroute.com/v1/';

const headers = {
    'Authorization': 'Token fccfb7a7f70f0f0aad04261e91666f4570d68218',
    'Content-Type': 'application/json'
};


const api = {
    posts: {
        async getList(page = 1) {
            const response = await fetch(`${baseUrl}/posts?_page=${page}`);
            const data = await response.json();
            return data;
        },
        async getSingle(id=1) {
            const response = await fetch (`${baseUrl}/posts/${id}`);
            const data = await response.json();
            return data;
        },
        async getComments(id=1) {
            const response = await fetch(`${baseUrl}/post/${id}/comments`);
            const data = await response.json();
            return data;
        },
    },
    users: {
        async getSingle(id=1) {
            const response = await fetch(`${baseUrl}/users/${id}`);
            const data = await response.json();
            return data;
        },
    },
    me: {
        async meUser() {
            const response = await fetch(`${url}routes/vehicles/`, _getAuthentication('GET'));
            const data = await response.json();
            const result = _orderByMonth(data);
            return result;
        }
    },
    plan: {
        async getVehiclesByDate(date) {
            const response = await fetch(`${url}plans/` + date +`/vehicles/`, _getAuthentication('GET'));
            const data = await response.json();
            return data;
        },
        async getRoutesByDate(date) {
            const response = await fetch(`${url}routes/plans/` + date +`/routes/`, _getAuthentication('GET'));
            const data = await response.json();
            return data;
        }
    }

};

function _getAuthentication(method) {
    return { method: method, headers: headers}
}

function _orderByMonth(vehicles) {
    let months = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0};
    let month;
    let data = [];
    vehicles.forEach( function (vehicle) {
        month = moment(vehicle.created).month();
        if (months[month]) {
            months[month] += 1
        } else {
            months[month] = 1
        }
    });

    for( let key in months) {
        data.push(months[key]);
    }
    return data;
}

export default api;
