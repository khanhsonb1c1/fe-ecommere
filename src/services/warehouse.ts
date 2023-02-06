import { warehouse } from "../http-tomoni";
const tracking = {
 
  get(id: string | number) {
    return warehouse.get(`/api/tracking-info?tracking_code=${id}`);
  },
};



export { tracking };