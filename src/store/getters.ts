import { States } from "./store";

export const isSuccess = (state: States) => state.isSuccess;

export const isLoading = (state: States) => state.isLoading;

export const confirmRef = (state: States) => state.confirmRef;

export const sickInfo = (state: States) => state.sickInfo;

export const mealInfo = (state: States) => state.mealInfo;

export const isShowCart = (state: States) => state.isShowCart;

export const cartClsSubject = (state: States) => state.cartClsSubject;

export const cartDir = (state: States) => state.cartDir;

export const cartLen = (state: States) => state.cartLen;

export const orderInfo = (state: States) => state.orderInfo;
