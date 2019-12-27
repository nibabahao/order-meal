<template lang="pug">
  #app
    transition(name="slide", mode="out-in")
      router-view
    toast
    confirm(ref="confirmRef")
</template>

<script lang="ts">
import Vue from "vue";
import Toast from "./components/toast/toast.vue";
import Confirm from "./components/confirm/confirm.vue";
import { mapMutations } from "vuex";
export default Vue.extend({
  components: {
    Toast,
    Confirm
  },
  methods: {
    ...mapMutations({
      saveConfirm: "SAVE_CONFIRM"
    })
  },
  mounted() {
    this.saveConfirm(this.$refs.confirmRef);
  }
});
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #ededed;
  -webkit-tap-highlight-color: transparent;
  font-size: 12px;
}
body {
  position: relative;
  max-width: 640px;
  margin: 0 auto;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul li {
  list-style-type: none;
}
b em {
  font-style: normal !important;
}
#app {
  height: 100%;
  overflow: hidden;
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
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #00b1b5;
}
.weui-btn_primary {
  background-color: #00b1b5;
}
.weui-btn_primary:not(.weui-btn_disabled):active {
  background-color: rgb(2, 209, 212);
}
.weui-btn_disabled {
  background-color: #fafafa;
}
.weui-picker__item {
  font-size: 16px;
}
</style>
