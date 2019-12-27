<template lang="pug">
	nav.navbar
		ul.clearfix
			li.n_order(:class="mode === 'mealTime' ? 'now' : 'pass'")
				i
					em
				span 订餐
			li.n_menu(:class="mode === 'mealMenu' ? 'now' : (mode === 'mealPay' ? 'pass' : '')")
				i 
					em
				span 菜式
			li.n_pay(:class="mode === 'mealPay' ? 'now' :''") 
				i
					em
				span 支付
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";
import { Prop } from "vue-property-decorator";

const VueOptions = Vue.extend({
  components: {}
});

@Component({})
export default class TopBar extends VueOptions {
  get mode() {
    return this.$route.name;
  }

  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="less" scoped>
nav.navbar {
  position: absolute;
  width: 6.4rem;
  top: 0;
  height: 0.9rem;
  background-color: #fff;
  z-index: 4;
}
nav.navbar ul {
  position: relative;
  width: 5.08rem;
  margin: 0 auto;
  height: 100%;
}
nav.navbar ul li {
  position: absolute;
  width: 0.48rem;
  top: 50%;
  font-size: 0.21rem;
  text-align: center;
  -webkit-transform: translate3d(0, -50%, 0);
  -ms-transform: translate3d(0, -50%, 0);
  -moz-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
nav.navbar ul li i {
  background-color: #fff;
  z-index: 2;
  position: relative;
  margin: 0 auto 0.02rem;
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  border: 1px solid #9e9f9f;
  box-sizing: border-box;
}
nav.navbar ul li i em {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  background-color: #9e9f9f;
}
nav.navbar ul li.n_menu i:before {
  position: absolute;
  display: block;
  content: "";
  background-color: #9e9f9f;
  top: 50%;
  width: 2.01rem;
  height: 1px;
  right: 0.29rem;
}
nav.navbar ul li.n_menu i:after {
  position: absolute;
  display: block;
  content: "";
  background-color: #9e9f9f;
  top: 50%;
  width: 2.01rem;
  height: 1px;
  left: 0.29rem;
}
nav.navbar ul li.n_order {
  left: 0;
}
nav.navbar ul li.n_menu {
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
nav.navbar ul li.n_pay {
  right: 0;
}
nav.navbar ul li.pass i {
  border-color: #15b6b2;
}
nav.navbar ul li.pass i em {
  background-color: #15b6b2;
}
nav.navbar ul li.now i {
  border-color: #15b6b2;
  background-color: #15b6b2;
}
nav.navbar ul li.now i em {
  background-color: #fff;
}
nav.navbar ul li.n_menu.pass i:before,
nav.navbar ul li.n_menu.pass i:after {
  background-color: #15b6b2;
}
nav.navbar ul li.n_menu.now i:before {
  background-color: #15b6b2 !important;
}
nav.navbar ul li.n_menu.now i:after {
  background-color: #9e9f9f !important;
}
</style>
