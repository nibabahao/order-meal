import { States, SickInfo, MealInfo } from "./store";
import * as types from "./mutation-types";
import { Coordinate } from "@/views/menuContent/timeSelect/mealMenu/mealMenu";
import { OrderInfo } from "@/views/menuContent/timeSelect/mealPay/mealPay";
import { Subject } from "@/common/rxjs";

const mutations = {
  [types.SET_SUCCESS](state: States, isSuccess: boolean) {
    state.isSuccess = isSuccess;
  },
  [types.SET_LOADING](state: States, isLoading: boolean) {
    state.isLoading = isLoading;
  },
  [types.SAVE_CONFIRM](state: States, confirmRef: any) {
    state.confirmRef = confirmRef;
  },
  [types.SAVE_SICK_INFO](state: States, sickInfo: SickInfo) {
    state.sickInfo = sickInfo;
  },
  [types.SAVE_MEAL_INFO](state: States, mealInfo: MealInfo) {
    state.mealInfo = mealInfo;
  },
  [types.SET_SHOW_CART](state: States, isShowCart: boolean) {
    state.isShowCart = isShowCart;
  },
  [types.CREATE_CART_CLOSE_SUBJECT](state: States) {
    const subject = new Subject();
    state.cartClsSubject = {
      subject,
      listener: subject.asObservable()
    };
  },
  [types.SET_CART_DIR](state: States, cartDir: Coordinate) {
    state.cartDir = cartDir;
  },
  [types.SET_CART_LEN](state: States, cartLen: number) {
    state.cartLen = cartLen;
  },
  [types.SET_ORDER_INFO](state: States, orderInfo: OrderInfo) {
    state.orderInfo = orderInfo;
  }
};

export default mutations;
