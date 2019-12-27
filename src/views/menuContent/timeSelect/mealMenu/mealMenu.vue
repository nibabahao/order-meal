<template lang="pug">
	.mealMenu(v-if="menuTypeList && menuItemList && menuTypeList.length && menuItemList.length")
		.menuType(:class="extendType ? 'menuType_active' : ''", ref="menuWrap")
			scroll(ref="menuType")
				ul
					li(v-for="item in menuTypeList", 
						:key="item.tid", 
						:class="item.tid === menuType ? 'left_active' : ''", 
						@click="switchType(item.tid)",
						ref="menuGroup"
					)
						i.icon_sjx
						span {{ item.name }}
		.menuItem(:class="extendMenu ? 'menuItem_active' : ''")
			scroll(:listenScroll="true", @scroll="scroll", :data="scrollData", ref="menuItem")
				ul.chioce_rall(@click="extendTheMenu()")
					li(v-for="menu in menuItemList", :key="menu.tid", ref="listGroup")
						h5 {{ menu.title }}
						dl(v-for="item in menu.item", :key="item.tid + item.fid")
							dt
								img(:src="item.img")
							dd
								h6 {{ item.name }}
									<br>
									b
										| ¥ 
										span {{ item.price }}
								p
									i.icons.icon_reduce(v-if="item.quantity", @click="reduceItem(item.tid, item.fid)")
									| {{ item.quantity }}
									i.icons.icon_plus(@click="addItem($event, item.tid, item.fid)")
			h5.fixed(ref="fixeTop") {{ fixedTitle }}
		cart(:cartData="cartData", @increase="increase", @decrease="decrease", @clearCart="clearHandle")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MenuType,
  MenuItem,
  MenuGroup,
  CartData,
  Coordinate
} from "./mealMenu.d";
import { CartItemStorage, CartDataStorage } from "@/components/cart/cart.d";
import { Mutation, Getter } from "vuex-class";
import Scroll, { ScrollData } from "@/components/scroll/scroll";
import Cart from "@/components/cart/cart.vue";
import { apiService } from "../../../../common/api.service";
import { formaterMenus, getCartInitData } from "./mealMenu.util";
import { MealInfo, SickInfo, SubjectParams } from "@/store/store";
import { throwBall } from "./mealMenu.animate";
import { storage, dateFormat, clearCart, __dev } from "../../../../common/util";
import { Subject } from "@/common/rxjs";

const VueOptions = Vue.extend({
  components: {
    Scroll,
    Cart
  }
});

@Component({
  watch: {
    scrollY(newY) {
      const mt = this as MealMenu;
      if (newY > 0) {
        mt.menuType = mt.menuItemList[0].tid;
        mt.menuTypeScroll(+mt.menuType);
        return;
      }
      const { listHeight, titleHeight } = mt;
      for (let i = 0; i < listHeight.length; i++) {
        const floor = listHeight[i - 1] || 0;
        const ceil = listHeight[i];
        const condtion1 =
          -newY >= floor - titleHeight && -newY < ceil - titleHeight;
        const condtion2 = -newY >= ceil - titleHeight && -newY < ceil;
        if (-newY >= floor && -newY < ceil) {
          mt.menuType = mt.menuItemList[i].tid;
          mt.diff = newY + ceil;
          break;
        }
      }
      mt.menuTypeScroll(+mt.menuType);
    },
    menuItemList() {
      setTimeout(() => {
        // 计算所有DOM的高度
        const mt = this as MealMenu;
        mt.calculateHeigh();
      }, 20);
    },
    diff(newVal) {
      const mt = this as MealMenu;
      const { titleHeight } = mt;
      let fixedTop =
        newVal > 0 && newVal < titleHeight ? newVal - titleHeight : 0;
      if (mt.fixedTop === fixedTop) {
        return;
      }
      mt.fixedTop = fixedTop;
      const dom = this.$refs.fixeTop as HTMLElement;
      dom.style.transform = `translate3d(0,${fixedTop}px,0)`;
    }
  }
})
export default class MealMenu extends VueOptions {
  @Getter("confirmRef") confirmRef!: any;
  @Getter("mealInfo") mealInfo: MealInfo;
  @Getter("sickInfo") sickInfo: SickInfo;
  @Getter("cartDir") cartDir: Coordinate;
  @Mutation("SET_LOADING") setloading!: Function;
  @Mutation("SET_CART_LEN") setCartLen!: Function;

  menuTypeList: MenuType[] = [];
  cartData: CartData[] = [];
  menuItemList: MenuGroup[] = [];
  scrollData: ScrollData = {
    click: true,
    probeType: 3
  };
  extendType: boolean = false;
  extendMenu: boolean = true;
  menuType: string = "0";
  scrollY: number = 0;
  listHeight: number[] = [];
  menuHeight: number[] = [];
  diff = 0;
  fixedTop: number;
  titleHeight: number = 0;
  wrapHieght: number;
  selectList: CartItemStorage[];
  subject: SubjectParams;
  cartList: CartDataStorage; // 购物车的LocalStorage
  len: number; // 购物车的总数量
  menuSubject: Subject<boolean> = new Subject();

  get fixedTitle() {
    if (this.scrollY > 0) {
      return "";
    }
    return this.menuType ? this.menuItemList[this.menuType].title : "";
  }

  constructor(props: any) {
    super(props);
    __dev(() => {
      window["thisMealMenu"] = this;
    });
  }

  switchType(tid: string) {
    if (!this.extendType) {
      this.extendType = true;
      this.extendMenu = false;
      return;
    }
    this.menuType = tid;
    this.menuItemScroll(+tid);
  }

  extendTheMenu() {
    this.extendType = false;
    this.extendMenu = true;
  }

  scroll(pos: { x: number; y: number }) {
    this.scrollY = pos.y;
  }

  calculateHeigh() {
    this.listHeight = [];
    this.menuHeight = [];
    const list = this.$refs.listGroup as HTMLElement[];
    const menu = this.$refs.menuGroup as HTMLElement[];
    let height = 0,
      height2 = 0;
    const menuWrap = this.$refs.menuWrap as HTMLElement;
    this.wrapHieght = menuWrap.clientHeight;
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      height += item.clientHeight;
      this.listHeight.push(height);
    }
    for (let i = 0; i < menu.length; i++) {
      let item = menu[i];
      height2 += item.clientHeight;
      this.menuHeight.push(height2);
    }
  }

  menuTypeScroll(index: number) {
    if (!index && index !== 0) {
      return;
    }
    //当前下标的边界判断
    const aheight = this.menuHeight[0];
    const listHeight = this.menuHeight[this.menuHeight.length - 1];
    if (index < 0) {
      index = 0;
    } else if (listHeight - index * aheight < this.wrapHieght) {
      index--;
    }
    const menuType = this.$refs.menuType as any;
    menuType.scrollToElement(this.$refs.menuGroup[index], 300);
  }

  menuItemScroll(index: number) {
    const lastOne = this.listHeight[this.listHeight.length - 1];
    const limit = lastOne - this.wrapHieght;
    const isLimit = this.listHeight[index - 1] > limit;
    const menuItem = this.$refs.menuItem as any;
    if (index < 0) {
      index = 0;
    } else if (isLimit) {
      menuItem.scrollTo(0, -limit, 300);
      return;
    }
    menuItem.scrollToElement(this.$refs.listGroup[index], 300);
  }

  addItem(event: any, tid: string, fid: string) {
    const i = this.menuItemList.findIndex(e => e.tid === tid);
    const item = this.menuItemList[i].item.find(e => e.fid === fid) as CartData;
    if (item.quantity) {
      item.quantity++;
    } else {
      item.quantity = 1;
    }
    this.$set(this.menuItemList, i, this.menuItemList[i]);
    const obj = Object.assign(
      {
        mealType: this.mealInfo.mealType
      },
      item
    );
    delete obj.img;
    const cartItem = this.cartData.find(e => e.tid === tid && e.fid === fid);
    if (cartItem) {
      cartItem.quantity = obj.quantity;
    } else {
      this.cartData.push(obj);
    }
    const cartStr = JSON.stringify(this.cartData);
    const handle = () => {
      const cartData = JSON.parse(cartStr);
      this.getTotal(cartData);
    };
    if (event) {
      const { x, y } = event.target.getBoundingClientRect();
      throwBall({ x, y }, this.cartDir, 0.34, handle);
    } else {
      handle();
    }

    // 写入缓存操作
    this.saveCart();
  }

  reduceItem(tid: string, fid: string) {
    const i = this.menuItemList.findIndex(e => e.tid === tid);
    const item = this.menuItemList[i].item.find(e => e.fid === fid) as CartData;
    item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
    if (item.quantity === 0) {
      delete item.quantity;
    }
    this.$set(this.menuItemList, i, this.menuItemList[i]);
    const obj = Object.assign(
      {
        mealType: this.mealInfo.mealType
      },
      item
    );
    delete obj.img;
    const cartItem = this.cartData.find(e => e.tid === tid && e.fid === fid);
    cartItem.quantity = obj.quantity;
    this.cartData = this.cartData.filter(e => e.quantity);
    this.getTotal(this.cartData);
    // 写入缓存操作
    this.saveCart();
  }

  increase(params: { tid: string; fid: string }) {
    this.addItem(null, params.tid, params.fid);
  }

  decrease(params: { tid: string; fid: string }) {
    this.reduceItem(params.tid, params.fid);
  }

  beforeCreate() {
    const cartList = storage.get("orderMeal:cartList");
    // 清空过期购物车
    const today = dateFormat(new Date());
    if (cartList) {
      Object.keys(cartList).forEach(e => {
        if (new Date(e).getTime() < new Date(today).getTime()) {
          delete cartList[e];
        }
      });
      storage.set("orderMeal:cartList", cartList);
    }
  }

  async created() {
    this.setloading(true);
    const menuKindRes = await apiService("getMenuKind").toPromise();
    if (menuKindRes.code) {
      this.setloading(false);
      this.confirmRef.show({
        title: "获取菜单错误",
        msg: menuKindRes.msg,
        isShowCancel: false
      });
      this.menuSubject.next(false);
      return;
    }
    this.menuTypeList = menuKindRes.menuKind;
    const menuItems = await apiService("getMenuItem").toPromise();
    if (menuKindRes.code) {
      this.setloading(false);
      this.confirmRef.show({
        title: "获取菜品错误",
        msg: menuItems.msg,
        isShowCancel: false
      });
      this.menuSubject.next(false);
      return;
    }
    this.menuSubject.next(true);
    this.setloading(false);
    this.menuItemList = formaterMenus(this.menuTypeList, menuItems.menuItem);
    this.cartList = storage.get("orderMeal:cartList");
    const { day, mealType } = this.mealInfo;
    if (this.cartList && this.cartList[day]) {
      const list = this.cartList[day][this.sickInfo.sickNo] || [];
      this.cartData = list[mealType] as any[];
      if (this.cartData && this.cartData.length) {
        this.cartData.forEach(c => {
          const i = this.menuItemList.findIndex(e => e.tid === c.tid);
          const item = this.menuItemList[i].item.find(
            e => e.fid === c.fid
          ) as CartData;
          item.quantity = c.quantity;
        });
        this.getTotal(this.cartData);
      } else {
        this.cartData = [];
      }
    }
  }

  mounted() {
    this.menuSubject.asObservable().subscribe(res => {
      if (res) {
        setTimeout(() => {
          const dom = this.$refs.fixeTop as HTMLElement;
          this.titleHeight = dom.offsetHeight;
        }, 100);
      }
      this.menuSubject.complete();
    });
  }

  destroyed() {
    this.setCartLen(0);
  }

  saveCart() {
    const { day, mealType } = this.mealInfo;
    if (this.cartList) {
      const obj = this.cartList[day];
      if (obj) {
        if (obj[this.sickInfo.sickNo]) {
          const data = obj[this.sickInfo.sickNo];
          data[mealType] = this.cartData as any[];
        } else {
          const cartObj = getCartInitData(this.mealInfo, this.sickInfo);
          cartObj[day][this.sickInfo.sickNo][mealType] = this.cartData as any[];
          obj[this.sickInfo.sickNo] = cartObj[day][this.sickInfo.sickNo];
        }
      } else {
        const cartObj = getCartInitData(this.mealInfo, this.sickInfo);
        cartObj[day][this.sickInfo.sickNo][mealType] = this.cartData as any[];
        Object.assign(this.cartList, cartObj);
      }
    } else {
      const cartObj = getCartInitData(this.mealInfo, this.sickInfo);
      cartObj[day][this.sickInfo.sickNo][mealType] = this.cartData as any[];
      this.cartList = cartObj;
    }
    storage.set("orderMeal:cartList", this.cartList);
  }

  getTotal(cartData: CartData[]) {
    this.len = cartData.reduce((p, e) => {
      return p + e.quantity;
    }, 0);
    this.setCartLen(this.len);
  }

  clearHandle() {
    const { sickNo } = this.sickInfo;
    const { day, mealType } = this.mealInfo;
    const runDetail: {
      tid: string;
      fid: string;
      quantity: number;
    }[] = [];
    this.cartData.forEach(e => {
      runDetail.push({
        tid: e.tid,
        fid: e.fid,
        quantity: e.quantity
      });
    });
    runDetail.forEach(e => {
      for (let i = 0, len2 = +e.quantity; i < len2; i++) {
        this.reduceItem(e.tid, e.fid);
      }
    });
    clearCart({ sickNo, day, mealType });
  }
}
</script>

<style lang="less" scoped>
@import "./mealMenu.less";
</style>
