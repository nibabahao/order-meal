declare interface ConfigType {
  method: "get" | "post" | "delete";
  url: string;
  urlParams?: object;
  paramType?: "form-data" | "json" | "raw";
  solidParams?: object;
}

export const API_CONFIG: {
  [key: string]: ConfigType;
} = {
  // 登录接口
  checkSickInfo: {
    method: "get",
    url: "/sickList/checkSickInfo"
  },
  getPrepay: {
    method: "get",
    url: "/sickList/getPrepay"
  },
  sysDate: {
    method: "get",
    url: "/sysConfig/sysDate"
  },
  getMenuKind: {
    method: "get",
    url: "/menuKind/getMenuKind"
  },
  getMenuItem: {
    method: "get",
    url: "/menuKind/getMenuItem"
  },
  addOrder: {
    method: "post",
    url: "/orderInfo/addOrder",
    paramType: "raw"
  },
  getOrder: {
    method: "get",
    url: "/orderInfo/getOrder"
  },
  getOrderList: {
    method: "get",
    url: "/orderInfo/getOrderList"
  }
};
