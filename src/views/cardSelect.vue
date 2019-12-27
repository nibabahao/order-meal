<template lang="pug">
	.cardList
		ul.weui-cells(v-for="item in sickList", :key="item.sickNo")
			li.weui-cell.weui-cell_swiped(v-swiper="item", @click="enterOrder(item)")
				.weui-cell__bd
					.weui-cell.weui-cell_access
						.weui-cell__bd
							p {{ item.fullName }}
							p {{ item.sickNo }}
						.weui-cell__ft {{ !!item.isDefault ? '默认' : '' }}
				.weui-cell__ft.delBtn
					a.weui-swiped-btn.weui-swiped-btn_warn(href="javascript:", @click.stop="deleteHandle(item)") 删除
				.blcok
		.weui-cells
			router-link.weui-cell.weui-cell_access.weui-cell_example(to="/bind")
				.weui-cell__hd
					i.icon-person
				.weui-cell__bd
					p 添加就诊人
				.weui-cell__ft 还可以绑定{{ 5 - sickList.length }}人
</template>

<script lang="ts">
import Vue from "vue";
import Scroll from "../components/scroll/scroll.vue";
import { swiper } from "../directive/swiper.service";
import { storage, __dev } from "../common/util";
import { Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";

const VueOptions = Vue.extend({
  components: {
    Scroll
  },
  directives: {
    swiper
  },
  data() {
    return {
      sickList: []
    };
  },
  mounted() {
    const sickList = storage.get("orderMeal:sickList");
    if (sickList && sickList.length) {
      this.sickList = sickList;
    }
  }
});

@Component({
  watch: {}
})
export default class CardSelect extends VueOptions {
  @Getter("confirmRef") confirmRef!: any;
  @Mutation("SAVE_SICK_INFO") saveSickInfo!: Function;

  constructor(props: any) {
    super(props);
    __dev(() => {
      window["thisCardSelect"] = this;
    });
  }

  enterOrder(item: any) {
    if (item.isOpen) {
      return;
    }
    this.sickList.forEach((e: any) => {
      if (e.sickNo === item.sickNo) {
        e.isDefault = 1;
      } else {
        e.isDefault = 0;
      }
    });
    const sickList = this.getSickList();
    storage.set("orderMeal:sickList", sickList);
    this.saveSickInfo(item);
    this.$router.push("/menuContent");
  }

  deleteHandle(item: any) {
    this.confirmRef.show({
      title: "删除",
      msg: "请确认是否删除当前就诊卡号?",
      onConfirm: () => this.deleteSickNo(item)
    });
  }

  deleteSickNo(item: any) {
    this.sickList = this.sickList.filter((e: any) => e.sickNo !== item.sickNo);
    const sickList = this.getSickList();
    storage.set("orderMeal:sickList", sickList);
  }
  getSickList() {
    const sickList = this.sickList
      .map((e: any) => ({
        sickNo: e.sickNo,
        tel: e.tel,
        fullName: e.fullName,
        isDefault: e.isDefault,
        location: e.location,
        prePay: e.prePay
      }))
      .sort((a: any, b: any) => b.isDefault - a.isDefault);
    return sickList;
  }
}
</script>

<style lang="less" scoped>
.cardList {
  min-height: 100%;
}
ul.weui-cells {
  margin-top: 0;
}
.weui-cell_swiped {
  .weui-cell {
    padding: 0 16px;
  }
  p {
    font-size: 0.25rem;
    color: #595757;
    height: 0.5rem;
    line-height: 0.5rem;
  }
  .delBtn {
    right: -68px;
  }
  .weui-cell__ft {
    color: #ff375a;
    font-size: 0.25rem;
    a {
      color: #fff;
      font-size: 17px;
    }
  }
  .blcok {
    position: absolute;
    width: 68px;
    right: -136px;
    height: 100%;
    top: 0;
    background-color: #fa5151;
  }
}
a.weui-cell_access {
  p {
    color: #9e9f9f;
    font-size: 0.23rem;
  }
  .weui-cell__ft {
    color: #9e9f9f;
    font-size: 0.23rem;
  }
}
.icon-person {
  display: block;
  width: 0.4rem;
  height: 0.32rem;
  margin-right: 0.05rem;
  background-image: url(../assets/icon.png);
  background-size: 0.4rem auto;
  background-repeat: no-repeat;
  background-position: 0 -0.38rem;
}
</style>
