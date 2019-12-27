<template lang="pug">
	div(ref="wrapper", class="wrapper")
		div
			slot
</template>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  .content {
    min-height: 100%;
    padding-bottom: 10px;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ScrollData } from "./scroll.d";
import { __dev } from "../../common/util";

const VueOptions = Vue.extend({
  components: {}
});

@Component
export default class Scroll extends VueOptions {
  @Prop() data!: ScrollData;
  @Prop() listenScroll!: boolean;

  deafultData!: ScrollData;
  scrollData!: ScrollData;
  scroll: any = null;

  constructor(props: any) {
    super(props);
    __dev(() => {
      window["thisScroll"] = this;
    });
  }

  mounted() {
    setTimeout(() => {
      this.initData();
    }, 20);
  }

  scrollTo() {
    if (this.scroll) {
      this.scroll.scrollTo.apply(this.scroll, arguments);
    }
  }
  scrollToElement() {
    if (this.scroll) {
      this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  }
  initData() {
    this.deafultData = {
      probeType: 1,
      click: true,
      listenScroll: false
    };
    this.scrollData = Object.assign({}, this.deafultData, this.data);
    const { wrapper } = this.$refs;

    if (!wrapper) {
      return;
    }

    const BScroll = window.BScroll;
    this.scroll = new BScroll(wrapper, this.scrollData);

    if (this.listenScroll) {
      let me = this;
      this.scroll.on("scroll", (pos: { x: number; y: number }) => {
        me.$emit("scroll", pos);
      });
    }
  }
}
</script>
