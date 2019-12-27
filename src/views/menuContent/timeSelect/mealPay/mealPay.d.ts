import { CartData } from "../mealMenu/mealMenu";

export interface OrderInfo {
  sickNo: string;
  phone: string;
  fullName: string;
  day: string;
  mealType: "0" | "1" | "2";
  cartData: CartData[];
  amount: number;
  location: string;
  prePay?: string;
  orderNo?: string;
  orderTime?: string;
  status?: string;
}
