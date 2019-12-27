import { MenuType, MenuItem, MenuGroup } from "./mealMenu";
import { MealInfo, SickInfo } from "@/store/store";
import { CartDataStorage } from "@/components/cart/cart";

/**
 *
 * @param menuTypeList 菜单种类
 * @param res 菜品接口返回
 */
export function formaterMenus(
  menuTypeList: MenuType[],
  res: MenuItem[]
): MenuGroup[] {
  let arr = [];
  arr = menuTypeList.map(e => {
    const item = res.filter(i => i.tid === e.tid);
    return {
      title: e.name,
      tid: e.tid,
      item
    };
  });
  return arr;
}

/**
 * 购物车数据初始化
 * @param meaiInfo 餐次信息
 * @param sickInfo 用户信息
 */
export function getCartInitData(
  meaiInfo: MealInfo,
  sickInfo: SickInfo
): CartDataStorage {
  let cartObj = {};
  cartObj[meaiInfo.day] = {};
  cartObj[meaiInfo.day][sickInfo.sickNo] = {};
  return cartObj;
}
