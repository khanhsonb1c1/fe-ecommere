import { helper } from "../http-tomoni";

const provinces = {
  get() {
    return helper.get(`/api/provinces`);
  },
};

const districts = {
  get(params?: object) {
    return helper.get(`/api/districts`, { params });
  },
};

const wards = {
  get(params?: object) {
    return helper.get(`/api/wards`, { params });
  },
};

const price = {
  get(params?: object) {
    return helper.get(`/api/amount-with-conditions`, { params });
  },
};

const logs = {
  get(params: object) {
    return helper.get(`/api/logs`, { params });
  },
};

const notification = {
  get(params?: object) {
    return helper.get(`/api/user-notifications`, { params });
  },

  read_all() {
    return helper.post(`/api/user-notifications/markAllAsRead`);
  },

  read_item(id?: string) {
    return helper.post(`/api/user-notifications/${id}/markAsRead`);
  },

  unread_item(id?: string) {
    return helper.post(`/api/user-notifications/${id}/markAsUnRead`);
  },
};

export { provinces, districts, wards, price, logs, notification };