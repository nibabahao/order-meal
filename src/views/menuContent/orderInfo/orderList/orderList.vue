<template lang="pug">
	.orderList
		.list_li(v-if="orderList && orderList.length", v-for="item in orderList", :key="item.orderNo")
			dl(@click="toOrderDetail(item.orderNo)")
				dt
					p
						b 用餐时间
						span {{ item.day }} {{ ['早餐', '午餐', '晚餐'][item.mealType] }}
					p
						b 总价：
						span ￥ {{ item.amount }}
					em(:class="item.status === '1' ? 'complete' : ''") {{ ['未送餐', '已送餐'][item.status] }}
				dd 下单时间：{{ item.orderTime }}
		.weui-loadmore.weui-loadmore_line(v-if="!orderList || !orderList.length")
			span.weui-loadmore__tips 暂无订单
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { SickInfo } from "@/store/store";
import { OrderInfo } from "../../timeSelect/mealPay/mealPay";
import { apiService } from "@/common/api.service";
import { dateFormat } from "@/common/util";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class OrderList extends VueOptions {
  @Getter("sickInfo") sickInfo: SickInfo;
  @Mutation("SET_LOADING") setloading!: Function;
  @Getter("confirmRef") confirmRef!: any;
  orderList: OrderInfo[] = [];

  constructor(props: any) {
    super(props);
    window["orderList"] = this;
  }

  async created() {
    const { sickNo } = this.sickInfo;
    this.setloading(true);
    const res = await apiService("getOrderList", {
      sickNo
    }).toPromise();
    this.setloading(false);
    if (res.code) {
      this.confirmRef.show({
        title: "订单列表",
        msg: res.msg,
        isShowCancel: false
      });
      return;
    }
    res.data.forEach(e => (e.orderTime = this.formaterDate(e.orderTime)));
    this.orderList = res.data;
  }

  formaterDate(time: string): string {
    const date = new Date(+time);
    let str = dateFormat(date);
    const num = (n: number) => (n > 0 ? n : `0${n}`);
    const hour = num(date.getHours());
    const minute = num(date.getMinutes());
    str = str + " " + hour + ":" + minute;
    return str;
  }

  toOrderDetail(orderNo: string): void {
    this.$router.push(`/menuContent/orderMap/orderDetail/${orderNo}`);
  }
}
</script>

<style lang="less" scoped>
@import "./orderList.less";
</style>
