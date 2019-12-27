import { Coordinate } from "@/views/menuContent/timeSelect/mealMenu/mealMenu";
import { OrderInfo } from "@/views/menuContent/timeSelect/mealPay/mealPay";
import { Subject, Observable } from "@/common/rxjs";

export interface States {
  isSuccess: boolean;
  isLoading: boolean;
  confirmRef: any;
  sickInfo: SickInfo;
  mealInfo: MealInfo; // 餐次选择
  isShowCart: boolean;
  cartClsSubject: SubjectParams;
  cartDir: Coordinate;
  cartLen: number; // 购物车数量
  orderInfo: OrderInfo;
}

export interface SickInfo {
  sickNo: string;
  tel: string;
  fullName: string;
  isOpen?: boolean;
  isDefault?: 0 | 1;
  prePay: string;
  location: string;
}

export interface MealInfo {
  day: string;
  mealType: "0" | "1" | "2";
}

export interface SubjectParams {
  subject: Subject<any>;
  listener: Observable<any>;
}
