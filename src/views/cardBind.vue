<template lang="pug">
	section
		.weui-form__control-area
			.weui-cells__group.weui-cells__group_form
				.weui-cells__title 绑定就诊卡
				.weui-cells.weui-cells_form
					.weui-cell
						.weui-cell__hd
							label.weui-label 姓名
						.weui-cell__bd
							input.weui-input(placeholder="填写姓名", v-model="fullName")
					.weui-cell
						.weui-cell__hd
							label.weui-label 就诊卡
						.weui-cell__bd
							input.weui-input(placeholder="填写就诊卡号", v-model="sickNo")
					.weui-cell
						.weui-cell__hd
							label.weui-label 联系电话
						.weui-cell__bd
							input.weui-input(placeholder="填写绑定的电话号码", type="number", pattern="[0-9]*", v-model="tel")
		.weui-form__tips-area
			.weui-form__tips.i-errors {{ msg }}
		.weui-form__opr-area
			a.weui-btn.weui-btn_primary(:class="isDisable ? 'weui-btn_disabled' : ''", href="javascript:", @click="submit()") 确定
</template>

<script lang="ts">
import Vue from "vue";
import { regCheck, storage, __dev } from "@/common/util";
import { apiService } from "../common/api.service";
import Component from "vue-class-component";
import { Mutation } from "vuex-class";

const VueOptions = Vue.extend({
  components: {},
  data() {
    return {
      sickNo: "1034567892",
      fullName: "胡莹",
      tel: "15918611293",
      msg: ""
    };
  }
});

@Component({
  watch: {}
})
export default class CardBind extends VueOptions {
  @Mutation("SET_LOADING") setloading!: Function;
  @Mutation("SET_SUCCESS") setSuccess!: Function;

  get isDisable() {
    return !this.sickNo || !this.fullName || !this.tel;
  }

  constructor() {
    super();
    __dev(() => {
      window["thisCardBind"] = this;
    });
  }

  async submit(): Promise<void> {
    if (this.isDisable) {
      return;
    }
    const res = this.regCheck();
    if (res !== true) {
      this.msg = res as string;
      return;
    }
    this.msg = "";
    const sickInfo: any = {
      sickNo: this.sickNo,
      fullName: this.fullName,
      tel: this.tel
    };
    this.setloading(true);
    const isExist = await apiService("checkSickInfo", sickInfo).toPromise();
    this.setloading(false);
    if (isExist.code) {
      this.msg = isExist.msg as string;
      return;
    }
    sickInfo.isDefault = 0;
    sickInfo.prePay = isExist.sick[0].prePay;
    sickInfo.location = isExist.sick[0].location;
    let sickList = storage.get("orderMeal:sickList");
    if (sickList && sickList.length) {
      const isExist = sickList.find(e => e.sickNo === sickInfo.sickNo);
      if (isExist) {
        this.msg = "当前就诊卡号已存在列表中，不需新增";
        return;
      }
      if (sickList.length === 5) {
        this.msg = "当前就诊卡号列表最多绑定5人";
        return;
      }
      sickList.push(sickInfo);
      sickList = sickList.sort((a: any, b: any) => b.isDefault - a.isDefault);
      storage.set("orderMeal:sickList", sickList);
    } else {
      let arr = [sickInfo];
      storage.set("orderMeal:sickList", arr);
    }
    this.setSuccess(true);
    setTimeout(() => {
      this.setSuccess(false);
      this.$router.push("/enter");
    }, 1000);
  }

  regCheck(): boolean | string {
    const res = regCheck([
      {
        name: "姓名",
        key: "fullName",
        value: this.fullName
      },
      {
        name: "就诊卡",
        key: "sickNo",
        value: this.sickNo
      },
      {
        name: "联系电话",
        key: "tel",
        value: this.tel
      }
    ]);
    return res;
  }
}
</script>

<style lang="less" scoped>
.i-errors {
  color: #fa5151;
  height: 22px;
}
section {
  min-height: 100%;
}
</style>
