<template lang="pug">
	transition(name="slide", mode="out-in")
		router-view
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
export default class OrderInfo extends VueOptions {
  constructor(props: any) {
    super(props);
  }
}
</script>

<style lang="less" scoped>
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
