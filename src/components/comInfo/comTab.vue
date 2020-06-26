<template>
  <div class="comtab">
    <ul :style="{'height':height}">
      <li
        v-for="(item, index) in tabList"
        :key="item"
        :class="{'oActive':flag === index }"
        @click="oActive(index, item.navc.length)"
      >
        {{item.nav}}
        <div class="lichild" v-if="item.navc.length && flag === index">
          <span 
          v-for="(navcitem, inde) in item.navc" 
          :key="navcitem" 
          :data-index="inde"
          >{{navcitem}}</span>
        </div>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
// import comIndexVue from './comIndex.vue'
export default {
  data() {
    return {
      height:"2rem",
      tabList: [
        {
          nav: "基础属性",
          navc: ["概况", "其他属性", "加点", "演武堂", "经脉"]
        },

        { nav: "武学/秘笈", navc: ["武功", "秘笈", "自创武学"] },
        { nav: "装备", navc: [] },
        {
          nav: "三尺青峰",
          navc: [
            "濯剑帖",
            "悟禅帖",
            "观梦帖",
            "寻道帖",
            "止杀帖",
            "锻心帖",
            "含灵帖"
          ]
        },
        { nav: "威名豪杰", navc: [] },
        { nav: "阵法", navc: ["阵法领悟加成总览", "已收集的阵法", "阵法技能"] },
        { nav: "浮生星阵", navc: [] },
        { nav: "物品", navc: ["道具", "武学", "宝石", "币", "仓库"] },
        { nav: "命格", navc: ["性情取向", "天资能力"] },
        { nav: "生活/行当", navc: ["行当", "生活技能"] },
        { nav: "外观", navc: ["时装", "特效", "其他"] }
      ],

      flag: 1
    };
  },
  methods: {
    oActive(index, length) {
      length? this.height = "2rem":this.height = "1rem";

      this.$router.push({ name: "TabBaseData" });
      this.flag = index;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/util.styl';

.comtab {
  width: 100%;
  overflow: scroll;
  border-top: 0.13rem solid #f8f8f8;

  &>ul {
    white-space: nowrap;
    position: relative; 
  }

  &>ul li {
    display: inline-block;
    padding: 0.32rem 0.2rem;

    .lichild {
      position: absolute;
      top: 1rem;
      left: 0;
    //   background: blue;
      border-top 1px solid #eee
      
      border-bottom 1px solid #eee
      
      width: 100%;
     
      padding: 0.32rem 0 0 0;
      display: flex; 
      span {
        display inline-block 
        padding 0 0 0.32rem 0;
        flex-grow 1
        text-align center
        font-weight normal
        color #888
        &.OSpan{
            color $red
            border-bottom: 1px solid $red;
        }
      }
    }

    &.oActive {
      background: $red;
      color: #fff;
    }
  }
}
</style>