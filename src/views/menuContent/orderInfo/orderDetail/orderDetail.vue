<template lang="pug">
	.orderDetail(v-if="orderDetail")
		.suc_tit 订单完成
		.pay_add
			dl
				dt 送餐位置
				dd
					p 
						| {{orderDetail.fullName}} {{ orderDetail.tel }}
						br
						| {{ orderDetail.location }}
			dl
				dt 用餐时间
				dd
					p {{ orderDetail.day }}   {{ ['早餐', '午餐', '晚餐'][orderDetail.mealType] }}
			.pay_list
				ul
					li(v-for="item in orderDetail.cartData", :key="item.tid + item.fid")
						b {{ item.name }}
						em x{{ item.quantity }}
						span ￥ {{ item.price }}
				.pay_sum
					b 合计
					span ￥ {{ orderDetail.amount }}
		.time_sumb
			router-link.weui-btn.weui-btn_primary(tag="a", to="/menuContent/orderMap") 返回订单列表
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { OrderInfo } from "../../timeSelect/mealPay/mealPay";
import { apiService } from "../../../../common/api.service";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class OrderDetail extends VueOptions {
  @Mutation("SET_LOADING") setloading!: Function;
  @Getter("confirmRef") confirmRef!: any;

  orderDetail: OrderInfo = null;

  constructor(props: any) {
    super(props);
  }

  async created() {
    const { orderNo } = this.$route.params;
    this.setloading(true);
    const res = await apiService("getOrder", {
      orderNo
    }).toPromise();
    this.setloading(false);
    if (res.code) {
      this.confirmRef.show({
        title: "获取订单信息失败",
        msg: res.msg,
        isShowCancel: false
      });
    }
    this.orderDetail = res.data;
  }
}
</script>

<style lang="less" scoped>
@import "./orderDetail.less";
</style>
