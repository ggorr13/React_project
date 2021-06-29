import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'23c78389-ecb6-44f5-ab1f-b59b2bb4f226',
    },

});

export const usersAPI = {

    getUsers (currentPage,pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },

    unFollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },

    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    authMe () {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}
