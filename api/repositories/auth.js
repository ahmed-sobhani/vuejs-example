import { HTTP } from "./../../common/http-common";

export default {
  async login(data) {
    return await HTTP.post(`/account/login/`, data).then(res => res.data);
  },
  async register(data) {
    return await HTTP.post(`/account/register/`, data).then(res => res.data);
  },
  async getProfile() {
    return await HTTP.get(`/account/profile/`).then(res => res.data);
  },
  async updateProfile(data) {
    return await HTTP.patch(`/account/profile/user/`, data).then(
      res => res.data
    );
  },
  async getAccreditationStaus() {
    return await HTTP.get(`/account/accreditate/`).then(res => res.data);
  },
  async uploadKYC(data) {
    return await HTTP.post(`/account/accreditate/file/`, data).then(
      res => res.data
    );
  },
  async updateAccount(data) {
    return await HTTP.patch(`/account/profile/`, data).then(res => res.data);
  },
  async logout() {
    await localStorage.removeItem("token");
    return await localStorage.removeItem("user");
  }
};
