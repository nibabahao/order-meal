<template lang="pug">
	.main
		top-bar
		.selectContent
			transition(name="slide", mode="out-in")
				router-view
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";
import TopBar from "@/components/topBar/topBar.vue";

const VueOptions = Vue.extend({
  components: {
    TopBar
  }
});

@Component({
  watch: {}
})
export default class TimeSelect extends VueOptions {
  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.selectContent {
  height: 100%;
  padding: 0.9rem 0 0;
  box-sizing: border-box;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-leave-to {
  transform: translate3d(-100%, 0, 0);
}
</style>
