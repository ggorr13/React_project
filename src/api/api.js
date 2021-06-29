import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
    },

});

export const usersAPI = {

    getUsers (currentPage,pageSize) {
        return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
            withCredentials:true,
            headers:{
                "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
            },
        })
            .then(response => response.data)
    },

    follow (userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{},{
            withCredentials:true,
            headers:{
                "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
            },
        }).then(response => response.data.resultCode)
    },

    unFollow (userId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
            withCredentials:true,
            headers:{
                "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
            },
        }).then(response => response.data.resultCode)
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
