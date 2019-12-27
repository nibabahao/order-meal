<template lang="pug">
	transition(name="slide")
		.mask(v-if="isShowCart", @click="closeCart()")
			.cart(v-if="isShowCart", @click.stop)
				.cart_tit
					p 购物车
					em(@click="cleanHandle()")
						i.icon_lj
						span 清空
				ul(v-if="cartData")
					li(v-for="(item, index) in cartData", :key="index")
						h6 {{ item.name }}
						b ￥{{ item.price }}
						p 
							i.icons.icon_reduce(v-if="item.quantity", @click="decrease(item)")
							em {{ item.quantity }}
							i.icons.icon_plus(@click="increase(item)")
				.shop_sum
					b ￥{{ amount }}
					a(href="javascript:void(0)", @click="payMent()") 去结算		
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { SubjectParams, SickInfo, MealInfo } from "../../store/store";
import { Prop } from "vue-property-decorator";
import { CartItemStorage } from "./cart";
import { multiplication, plux } from "@/common/util";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class Cart extends VueOptions {
  @Getter("isShowCart") isShowCart: boolean;
  @Getter("cartClsSubject") cartClsSubject: SubjectParams;
  @Getter("sickInfo") sickInfo: SickInfo;
  @Getter("mealInfo") mealInfo: MealInfo;
  @Mutation("SET_ORDER_INFO") setOrderInfo: Function;
  @Mutation("SET_SHOW_CART") setShowCart: Function;
  @Prop() cartData: CartItemStorage[];
  @Prop() len: number;

  constructor(props: any) {
    super(props);
  }

  get amount() {
    return (this.cartData || []).reduce((p, e) => {
      const curAmount = multiplication(+e.quantity, +e.price);
      return plux(p, curAmount);
    }, 0);
  }

  closeCart() {
    this.cartClsSubject.subject.next();
  }

  increase(cart: CartItemStorage) {
    this.$emit("increase", {
      tid: cart.tid,
      fid: cart.fid
    });
  }

  decrease(cart: CartItemStorage) {
    this.$emit("decrease", {
      tid: cart.tid,
      fid: cart.fid
    });
  }

  payMent() {
    if (this.amount === 0) {
      return;
    }
    const { sickNo, tel: phone, fullName, location } = this.sickInfo;
    this.setOrderInfo({
      sickNo,
      phone,
      fullName,
      location,
      ...this.mealInfo,
      amount: this.amount,
      cartData: this.cartData
    });
    this.closeCart();
    this.$router.push("/menuContent/timeSelect/mealPay");
  }

  cleanHandle() {
    this.$emit("clearCart");
  }
}
</script>

<style lang="less" scoped>
@import "./cart.less";
</style>
