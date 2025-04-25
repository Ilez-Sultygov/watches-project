import { axiosInstance } from "../../shared/lib/axiosInstance";

export default class OrderApi {
  static async getAllOrders(userData) {
    const { data } = await axiosInstance.get("/orders", userData);
    return data;
  }
}