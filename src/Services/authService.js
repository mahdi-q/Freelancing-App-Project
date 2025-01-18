import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

export function getUsers(qs) {
  return http.get(`/admin/user/list${qs}`).then(({ data }) => data.data);
}

export function changeUserStatusApi({ id, data }) {
  return http
    .patch(`/admin/user/verify/${id}`, data)
    .then(({ data }) => data.data);
}

export function adminLogin(data) {
  return http.post("/user/admin-auth", data).then(({ data }) => data.data);
}
