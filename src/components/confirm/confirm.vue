<template lang="pug">
	.js_dialog(v-if="isShow")
			.weui-mask
			.weui-dialog
					.weui-dialog__hd
						strong.weui-dialog__title {{ confirmData.title }}
					.weui-dialog__bd {{ confirmData.msg }}
					.weui-dialog__ft
							a.weui-dialog__btn.weui-dialog__btn_default(
								href="javascript:;",
								@click="onCancelHandle()",
								v-if="confirmData.isShowCancel"
							) {{ confirmData.cancelText }}
							a.weui-dialog__btn.weui-dialog__btn_primary(
								href="javascript:;",
								@click="confirmHandle()",
								v-if="confirmData.isShowConfirm"
							) {{ confirmData.confirmText }}
</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ConfirmData } from "./confirm.d";
import { Mutation } from "vuex-class";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class Confirm extends VueOptions {
  isShow: boolean = false;
  defaultData!: ConfirmData;
  confirmData: ConfirmData | any = {};

  constructor(props: any) {
    super(props);
  }

  mounted() {
    this.initData();
  }

  initData() {
    this.defaultData = {
      title: "提示",
      msg: "",
      isShowConfirm: true,
      isShowCancel: true,
      confirmText: "确定",
      cancelText: "取消",
      onConfirm: () => {},
      onCancle: () => {}
    };
    this.confirmData = Object.assign({}, this.defaultData);
  }

  confirmHandle() {
    this.isShow = false;
    this.confirmData.onConfirm();
  }

  onCancelHandle() {
    this.isShow = false;
    this.confirmData.onCancle();
  }

  show(data: ConfirmData) {
    this.confirmData = Object.assign({}, this.defaultData, data);
    this.isShow = true;
  }
}
</script>

<style lang="less" scoped>
.js_dialog {
  font-size: 17px;
}
</style>
