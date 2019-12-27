import { isArray } from "util";
import { REG_CHECK_CONFIG } from "./reg.config";

interface CheckData {
  name: string;
  key: string;
  value: string;
}

export function regCheck(data: CheckData | CheckData[]): boolean | string {
  let res;
  if (isArray(data)) {
    const checkRes = (data as CheckData[]).some((e: CheckData) => {
      const item = REG_CHECK_CONFIG[e.key];
      if (item) {
        if (item.reg.test(e.value)) {
          return false;
        } else {
          res = item.regFailMsg(e.name);
          return true;
        }
      } else {
        return false;
      }
    });
    if (checkRes) {
      return res;
    } else {
      return true;
    }
  } else {
    data = data as CheckData;
    const item = REG_CHECK_CONFIG[data.key];
    if (item) {
      if (item.reg.test(data.value)) {
        return true;
      } else {
        res = item.regFailMsg(data.name);
        return res;
      }
    } else {
      return false;
    }
  }
}

/**
 * 读写缓存
 */
export const storage = {
  get: key => {
    const str = localStorage.getItem(key);
    if (!str) {
      return null;
    }
    return JSON.parse(str);
  },
  set: (key, val) => {
    if (typeof val === "object" && val) {
      localStorage.setItem(key, JSON.stringify(val));
    } else {
      localStorage.setItem(key, val);
    }
  }
};

export function dateFormat(date: Date, dir: string = "-") {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fortter = num => (num >= 10 ? num : `0${num}`);
  return year + dir + fortter(month) + dir + fortter(day);
}

export function getDateStr(
  date: Date,
  mode: "YYYY-MM-DD" | "MM-DD" | "DD" | "YYYY-MM" = "YYYY-MM-DD"
) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fortter = num => (num >= 10 ? num : `0${num}`);
  switch (mode) {
    case "MM-DD":
      return fortter(month) + "月" + fortter(day) + "日";
    case "DD":
      return fortter(day) + "日";
    case "YYYY-MM":
      return year + "年" + fortter(month) + "月";
    case "YYYY-MM-DD":
    default:
      return year + "年" + fortter(month) + "月" + fortter(day) + "日";
  }
}

/**
 * 获取小数点
 * @param num 小数
 */
export function getRadix(num: number) {
  return new Number(num).toString().split(".")[1]
    ? new Number(num).toString().split(".")[1].length
    : 0;
}

/***
 * 小数相乘
 */
export function multiplication(a: number, b: number) {
  const len = getRadix(a) + getRadix(b);
  const e = Math.pow(10, len);
  const aStr = +a.toString().replace(".", "");
  const bStr = +b.toString().replace(".", "");
  return (aStr * bStr) / e;
}

/**
 * 小数相加
 */
export function plux(a: number, b: number) {
  const max = Math.max(getRadix(a), getRadix(b));
  const e = Math.pow(10, max);
  return (multiplication(a, e) + multiplication(b, e)) / e;
}

/**
 * 清空购物车
 */
export function clearCart(params: {
  day: string;
  sickNo: string;
  mealType: string;
}) {
  let cartList = storage.get("orderMeal:cartList");
  let dayObj = cartList[params.day];
  let sickPerson = dayObj[params.sickNo];
  delete sickPerson[params.mealType];
  if (!Object.keys(sickPerson).length) {
    delete dayObj[params.sickNo];
    if (!Object.keys(dayObj).length) {
      delete cartList[params.day];
    }
  }
  storage.set("orderMeal:cartList", cartList);
}

export function __dev(func: Function) {
  if (process.env.NODE_ENV === "development") {
    if (func) {
      func();
    }
  }
}
