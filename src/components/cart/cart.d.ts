// 购物车缓存的数据格式
export interface CartDataStorage {
  // 日期 YYYYMMDD
  [key: string]: {
    // 用户名
    [key: string]: {
      "0": CartItemStorage[];
      "1": CartItemStorage[];
      "2": CartItemStorage[];
    };
  };
}
// 长度只有3
export interface CartItemStorage {
  mealType: "0" | "1" | "2"; // 早 午 晚
  tid: string;
  fid: string;
  quantity: string;
  price: string;
  name: string;
}
