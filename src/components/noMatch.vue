<template lang="pug">
	.noResult
		.imgWrap
			img(src="../assets/no_result.png")
		h4.page__title 404
		p.page__desc 抱歉，你访问的页面不存在
		router-link.weui-btn.weui-btn_primary(tag="a", to="/enter") 返回选择就诊卡
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class NoMatch extends VueOptions {
  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="less" scoped>
.noResult {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate3d(0, -50%, 0);
}
.imgWrap {
  text-align: center;
  margin-top: 0.2rem;
  img {
    width: 3.2rem;
  }
}
.page__title {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
}
.page__desc {
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 14px;
  margin-bottom: 0.4rem;
}
</style>
