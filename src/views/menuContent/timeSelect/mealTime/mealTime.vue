<template lang="pug">
	.mealTime
		.order_time
			.time_tit 
				i.icons.icon_time 
				h5 时间
			.choice_time
				ul
					li(:class="dayMode === '0' ? 'choice_active' : ''", @click="choiceDay('0')") 今天
					li(:class="dayMode === '1' ? 'choice_active' : ''", @click="choiceDay('1')") 明天
					li(:class="dayMode === '2' ? 'choice_active' : ''", @click="choiceDay('2')") 后天
					li(:class="dayMode === '3' ? 'choice_active' : ''", @click="choiceDay('3')") 更多时间
				.times {{ day }}
		.order_food
			.time_tit
				i.icons.icon_food
				h5 餐次
			.choice_food
				ul
					li(:class="meal === '0' ? 'choice_actives' : ''",  @click="choiceMeal('0')")
						span 早餐
					li(:class="meal === '1' ? 'choice_actives' : ''",  @click="choiceMeal('1')")
						span 午餐
					li(:class="meal === '2' ? 'choice_actives' : ''",  @click="choiceMeal('2')")
						span 晚餐
		.time_sumb
			a.weui-btn.weui-btn_primary(@click="submit()") 下一步 选择菜式

</template>

<style lang="less" scoped></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Mutation, Getter } from "vuex-class";
import { dateFormat, getDateStr, __dev } from "@/common/util";
import { apiService } from "../../../../common/api.service";

const VueOptions = Vue.extend({
  components: {}
});

@Component({
  watch: {}
})
export default class MealTime extends VueOptions {
  @Getter("confirmRef") confirmRef!: any;
  @Mutation("SAVE_MEAL_INFO") saveMealInfo: Function;

  dayMode: "0" | "1" | "2" | "3" = "0"; // 默认当天
  day: string = dateFormat(new Date()); // 格式化后当前时间
  initTime: Date = new Date(); // 初始系统时间
  dateArr: {
    label: string;
    value: string;
  }[] = [];
  meal: "0" | "1" | "2" | "" = "";
  pickerDay: string; // 记录datePicker的时间

  constructor(props: any) {
    super(props);
    __dev(() => {
      window["thisMealTime"] = this;
    });
  }

  async choiceDay(dayMode: "0" | "1" | "2" | "3") {
    this.dayMode = dayMode;
    switch (dayMode) {
      case "0":
        this.day = await this.getSysDate();
        break;
      case "3":
        this.showPicker();
        break;
      default:
        const dayTime = 1000 * 24 * 60 * 60;
        const nowTime = this.initTime.getTime();
        const date = new Date(nowTime + +dayMode * dayTime);
        this.day = dateFormat(date);
    }
    this.meal = this.getMeal();
  }

  choiceMeal(meal: "0" | "1" | "2" | "") {
    this.meal = meal;
  }

  async initData() {
    this.dateArr = [3, 4, 5, 6].map(e => {
      const dayTime = 1000 * 24 * 60 * 60;
      const nowTime = new Date(this.day).getTime();
      const date = new Date(nowTime + e * dayTime);
      return {
        label: getDateStr(date),
        value: dateFormat(date)
      };
    });
    this.day = await this.getSysDate();
    this.meal = this.getMeal();
  }

  getMeal(): "0" | "1" | "2" | "" {
    switch (this.dayMode) {
      case "0":
        const date = this.initTime;
        const h = date.getHours();
        if (h < 7) {
          return "0";
        } else if (h < 11) {
          return "1";
        } else if (h < 17) {
          return "2";
        } else {
          return "";
        }
      default:
        return "0";
    }
  }

  async getSysDate(): Promise<string> {
    const res = await apiService("sysDate").toPromise();
    this.initTime = new Date(res.date);
    return dateFormat(new Date(res.date));
  }

  showPicker() {
    window.weui.picker(this.dateArr, {
      onConfirm: result => {
        this.day = result[0].value;
      },
      onClose: () => {
        const day = this.initTime.getDay();
        const day2 = new Date(this.day).getDay();
        if (day2 - day <= 2) {
          this.choiceDay(String(day2 - day) as any);
        }
      },
      title: "更多日期"
    });
  }

  submit() {
    if (!this.day) {
      this.confirmRef.show({
        title: "提示",
        msg: "请选择就餐日期",
        isShowCancel: false
      });
      return;
    }
    if (!this.meal) {
      this.confirmRef.show({
        title: "提示",
        msg: "请选择对应的餐次",
        isShowCancel: false
      });
      return;
    }
    if (this.dayMode === "0") {
      const date = this.initTime;
      const h = date.getHours();
      switch (this.meal) {
        case "0":
          if (!(h < 7)) {
            this.confirmRef.show({
              title: "提示",
              msg: "早餐的订餐时段在7点以前",
              isShowCancel: false
            });
            return;
          }
          break;
        case "1":
          if (!(h < 11)) {
            this.confirmRef.show({
              title: "提示",
              msg: "午餐的订餐时段在11点以前",
              isShowCancel: false
            });
            return;
          }
        case "2":
          if (!(h < 17)) {
            this.confirmRef.show({
              title: "提示",
              msg: "晚餐的订餐时段在17点以前",
              isShowCancel: false
            });
            return;
          }
      }
    }
    this.saveMealInfo({
      day: this.day,
      mealType: this.meal
    });
    this.$router.push("/menuContent/timeSelect/mealMenu");
  }

  mounted() {
    this.initData();
  }
}
</script>

<style lang="less" scoped>
@import "./mealTime.less";
</style>
