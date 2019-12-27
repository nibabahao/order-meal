<template lang="pug">
	.toast
		div(v-if="isLoading")
			.weui-mask_transparent
			.weui-toast
				i.weui-loading.weui-icon_toast
				p.weui-toast__content 数据加载中
		div(v-if="isSuccess")
			.weui-mask_transparent
			.weui-toast
				.weui-icon-success-no-circle.weui-icon_toast
				p.weui-toast__content 已完成
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, Action, Mutation } from "vuex-class";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class Toast extends VueOptions {
  @Getter("isSuccess") isSuccess!: boolean;
  @Getter("isLoading") isLoading!: boolean;

  constructor(props) {
    super(props);
  }
}
</script>
