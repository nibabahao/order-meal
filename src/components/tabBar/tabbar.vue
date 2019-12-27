<template lang="pug">
	.weui-tabbar
		a.weui-tabbar__item.weui(
			:class="mode==='timeSelect' ? 'tab-active' : ''",
			@click="switchTab('timeSelect')"
		)
			i.icon1.weui-tabbar__icon
			p.weui-tabbar__label 订餐
		a.weui-tabbar__item(
			:class="mode==='cart' ? 'tab-active' : ''",
			@click="switchTab('cart')"
		)
			span(style="display: inline-block;position: relative;")
				i.icon2.weui-tabbar__icon
				span.weui-badge(:class="!cartLen ? 'brageHide' : ''", style="position: absolute;top: -4px;right: -13px;", ref="badge") {{ cartLen }}
			p.weui-tabbar__label 购物车
		a.weui-tabbar__item(
			:class="mode==='orderInfo' ? 'tab-active' : ''",
			@click="switchTab('orderInfo')"
		)
			i.icon3.weui-tabbar__icon
			p.weui-tabbar__label 订单
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { SubjectParams } from "@/store/store";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class Tabbar extends VueOptions {
  @Mutation("SET_SHOW_CART") setShowCart: Function;
  @Getter("isShowCart") isShowCart: boolean;
  @Mutation("CREATE_CART_CLOSE_SUBJECT") createCartCloseSubject: Function;
  @Getter("cartClsSubject") cartClsSubject: SubjectParams;
  @Mutation("SET_CART_DIR") setCartDir: Function;
  @Getter("cartLen") cartLen: number;

  mode: "timeSelect" | "cart" | "orderInfo" = "timeSelect";

  constructor(props: any) {
    super(props);
  }

  switchTab(mode: "timeSelect" | "cart" | "orderInfo"): void {
    const { path, name } = this.$route;
    switch (mode) {
      case "timeSelect":
        this.mode = "timeSelect";
        this.setShowCart(false);
        if (!path.includes("timeSelect")) {
          this.$router.push("/menuContent/timeSelect");
        }
        break;
      case "cart":
        if (name === "mealMenu") {
          this.setShowCart(!this.isShowCart);
          this.mode = this.isShowCart ? "cart" : "timeSelect";
        } else {
          this.setShowCart(false);
        }
        break;
      case "orderInfo":
        this.mode = "orderInfo";
        this.setShowCart(false);
        this.$router.push("/menuContent/orderMap");
        break;
    }
  }

  mounted() {
    this.createCartCloseSubject();
    setTimeout(() => this.listenCartClose());
    const badge = this.$refs.badge as any;
    setTimeout(() => {
      // 路由动画
      const { x, y } = badge.getBoundingClientRect();
      this.setCartDir({ x, y });
    }, 500);
  }

  destroyed() {
    this.cartClsSubject.subject.complete();
  }

  listenCartClose() {
    this.cartClsSubject.listener.subscribe(res => {
      if (!res) {
        this.mode = "timeSelect";
      } else {
        this.mode = "orderInfo";
      }
      this.setShowCart(false);
    });
  }
}
</script>

<style lang="less" scoped>
.weui-tabbar {
  box-shadow: 0 -2px 10px #bbb;
  span.brageHide {
    opacity: 0;
  }
}
.weui-tabbar i {
  background-image: url(../../assets/bIcon.png);
  background-size: 56px auto;
  background-repeat: no-repeat;
  &.icon1 {
    background-position: 4px 1px;
  }
  &.icon2 {
    background-position: 1px -26px;
  }
  &.icon3 {
    background-position: 3px -54px;
  }
}
.weui-tabbar .tab-active {
  .weui-tabbar__label {
    color: #00b1b5;
  }
  i.icon1 {
    background-position: -28px 1px;
  }
  i.icon2 {
    background-position: -28px -26px;
  }
  i.icon3 {
    background-position: -30px -54px;
  }
}
</style>
