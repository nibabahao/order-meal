<template lang="pug">
	.mealPay(v-if="orderInfo")
		.pay_add
			dl
				dt 送餐位置
				dd
					p 
						| {{orderInfo.fullName}} {{ orderInfo.tel }}
						br
						| {{ orderInfo.location }}
			dl
				dt 用餐时间
				dd
					p {{ orderInfo.day }}   {{ ['早餐', '午餐', '晚餐'][orderInfo.mealType] }}
			.pay_list
				ul
					li(v-for="item in orderInfo.cartData", :key="item.tid + item.fid")
						b {{ item.name }}
						em x{{ item.quantity }}
						span ￥ {{ item.price }}
				.pay_sum
					b 合计
					span ￥ {{ orderInfo.amount }}
		.pay_way
			h6
				i.icons.icon_pay
				span 支付方式
			p
				| 住院预交金支付 
				span (剩余¥{{orderInfo.prePay}})
		.time_sumb
			a.weui-btn.weui-btn_primary(:class="isDisable ? 'weui-btn_disabled' : ''", @click="submit()") 确认订单
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { OrderInfo } from "./mealPay";
import { apiService } from "../../../../common/api.service";
import { storage, clearCart } from "@/common/util";
import { SubjectParams } from "@/store/store";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class MealPay extends VueOptions {
  @Getter("orderInfo") orderInfo: OrderInfo;
  @Getter("confirmRef") confirmRef!: any;
  @Mutation("SET_LOADING") setloading!: Function;
  @Mutation("SET_ORDER_INFO") setOrderInfo: Function;
  @Getter("cartClsSubject") cartClsSubject: SubjectParams;

  isDisable: boolean = false;
  constructor(props: any) {
    super(props);
  }

  mounted() {}

  async submit() {
    if (+this.orderInfo.amount > +this.orderInfo.prePay) {
      this.confirmRef.show({
        title: "提示",
        msg: "住院预交金余额不足，请到祈福医院公众号充值",
        isShowCancel: false
      });
      return;
    }
    this.isDisable = true;
    this.setloading(true);
    const res = await apiService("addOrder", {
      order: this.orderInfo
    }).toPromise();
    this.setloading(false);
    this.isDisable = false;
    if (res.code) {
      this.confirmRef.show({
        title: "创建订单出错",
        msg: res.msg,
        isShowCancel: false
      });
      return;
    }
    clearCart(this.orderInfo);
    this.cartClsSubject.subject.next(true);
    this.$router.push(`/menuContent/orderMap/orderDetail/${res.orderNo}`);
  }

  async created() {
    const { sickNo } = this.orderInfo;
    this.setloading(true);
    const res = await apiService("getPrepay", {
      sickNo
    }).toPromise();
    this.setloading(false);
    if (res.code) {
      this.confirmRef.show({
        title: "获取预付款错误",
        msg: res.msg,
        isShowCancel: false
      });
      return;
    }
    this.setOrderInfo({
      ...this.orderInfo,
      prePay: res.prePay
    });
  }
}
</script>

<style lang="less" scoped>
@import "./mealPay.less";
</style>
