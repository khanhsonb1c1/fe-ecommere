import { auth } from "../http-tomoni";

const user_info = {
  get(params: object) {
    return auth.get(`/api/users`, { params });
  },

  update(id: string, params?: object) {
    return auth.put(`/api/users/${id}`, params);
  },

  create(params?: object) {
    return auth.post(`/api/users`, params );
  },
};

const user_address = {
  get(params: object) {
    return auth.get(`/api/addresses`, { params });
  },

  create(params?: object) {
    return auth.post(`/api/addresses`, params);
  },

  delete(id: string | number) {
    return auth.delete(`/api/addresses/${id}`);
  },

  update(id: string | number, params?: object) {
    return auth.put(`/api/addresses/${id}`, params);
  },

  get_detail(id: string | number) {
    return auth.get(`/api/addresses/${id}`);
  },

};

export { user_info, user_address };
