<template>
  <div>  
    <div class="container" v-for="item in result" :key="item.expire_remain_seconds">
      <div class="leftitem">
        <img :src="baseUrl + item.icon" alt />
        <div class="mes">
          <div class="mestop">
            <div class="icons">
              <span class="ico gongs" v-show="!item.pass_fair_show">公</span>
              <span class="ico huan" v-show="item.allow_bargain">还</span>
            </div>
            <div class="menp">{{item.format_equip_name}}</div>
            <div class="level">{{item.equip_level}}级</div>
          </div>

          <div class="mesmid">
            <span class="blux">修为：</span>
            <span class="bluxnum">{{item.other_info.basic_attrs[0][1]}}</span>
          </div>
          <div class="mesbot">
            <div class="botinfo">
              <span class="blux">金秘籍：</span>
              <span class="bluxred">{{item.other_info.basic_attrs[1][1]}}</span>
            </div>
            <div class="botinfo">
              <span class="blux">金紫色特技：</span>
              <span class="bluxnum">{{item.other_info.basic_attrs[2][1]}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightitem">
        <div class="server">{{item.area_name}}-{{item.server_name}} <span v-text="item.platform_type == 2?'And':'IOS'"></span></div>
        <div class="prices">￥{{item.price/100}}.00</div>
        <div class="pamu">{{item.collect_num||0}}人收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: Array
  },
  name: "commodity",
  data() {
    return {
      baseUrl: "https://cbg-clx.res.netease.com"
    };
  },
  mounted() {
    // console.log(this.result);
  },
  methods:{ 
  },
  computed: {
      
  }
};
</script>
 
<style scoped lang="stylus">
@import '~@/assets/css/util.styl';

.container {
  font-size: 1.2rem;
  color: #888;
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: 0 .1rem 0 .1rem;
  padding: .2rem 0;
  border-bottom: 1px solid #eeeeee;

  .leftitem {
    display: flex;
    justify-content: flex-start;
    flex: 2;  
    img {
      width: 1.3rem;
      height: 1.3rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .mes {
      padding-left: .1rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      font-size: .3rem;
      .mestop {
        display: flex;
        align-items: center;

        .ico {
          background: $pink;
          margin-right: 0.3em;
          font-size: 0.9em;
          padding: 2px;
          border-radius: 2px;
          vertical-align: middle;
          color: #ffffff;
        }

        .gongs {
          background: $blue;
        }

        .menp {
          color: #454545;
          font-size: .3rem;
          vertical-align: top;
          padding: 0 0.2em;
          border-right: 1px solid #EEE;
        }

        .level {
          font-size: .8em;
          padding-left: 0.3em;
        }
      }

      .bluxnum {
        color: #454545;
      }

      .bluxred {
        color: $red;
      }

      .mesbot {
        font-size: .25rem;
        width 100% 
        .botinfo {
          display: inline-block;
          padding-right: 10px;
      
        }
      }
    }
  }

  .rightitem {
    flex  1
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-size: .25rem;
    .prices {
      color: $deepRed;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
}
</style>
