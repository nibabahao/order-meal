<template lang="pug">
	.weui-tab
		.weui-tab__panel
			router-view
		tabbar
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";
import Tabbar from "@/components/tabBar/tabbar.vue";

const VueOptions = Vue.extend({
  components: {
    Tabbar
  }
});

@Component({
  watch: {}
})
export default class MenuContent extends VueOptions {
  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="less" scoped>
.weui-tab__panel {
  position: relative;
}
</style>
