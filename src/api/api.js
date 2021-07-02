import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'7e95d189-5848-4381-9f31-37b77b716714',
    },
});

export const usersAPI = {

    getUsers (currentPage,pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unFollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const authAPI = {

    authMe () {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    login(email,password,rememberMe=false) {
        return instance.post('auth/login',{email,password,rememberMe})
            .then(response => response)
    },

    logOut() {
        return instance.delete('auth/login')
            .then(response => response)
    }
}

export const profileAPI = {

    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response)
    },

    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus (status) {
        return instance.put(`profile/status`,{
            status:status
        })
    }
}