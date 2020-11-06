import * as axios from "axios";
import Login from "../components/Login/Login";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": "07d924fb-0bd7-4d00-890b-47df6c146a9a"}
})

export const UsersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => {
         return response.data;
      })
   },
   deleteUsers(id) {
      return instance.delete(`follow/${id}`)
      .then(response =>
      {
        return response.data;
         })
   },
   postUsers(id) {
      return instance.post(`follow/${id}`)
      .then(response =>
         {
            return response.data;
         })
   }
}

export const AuthAPI = {
   getAuth() {
      return instance.get(`auth/me`).then(response =>
      {
         return response.data;
      })
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe});
   },
   logout(){
      return instance.delete(`auth/login`);
   }
}

export const ProfileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId).then(response =>
      {
         return response.data;
      })
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, {status: status});
   }
}
