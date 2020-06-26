<template>
  <div class="container">
    <div class="userInfo">
      <div class="infotop">
        <div class="server">声声慢-流云共雨</div>
        <div class="messtate">已出售</div>
      </div>
      <div class="infomid">
        <img alt />
        <div class="mess">
          <div class="messtop">
            <span>沧海</span>160级
          </div>
          <div class="price">￥1600.00</div>
          <div class="other">
            <div>
              修为：<span>30333</span>
            </div>
            <div>
              金秘籍：<span class="reds">3</span>
            </div>
            <div>
              金紫色特技：<span>4</span>
            </div>
          </div>
        </div>
        <span>25人收藏</span>
      </div>
      <div class="infobot">卖家：叶欢</div>
    </div>
    
  <div class="comtabs">
    <comTab />
  </div>
  </div>
</template>

<script>
import comTab from "./comTab.vue"

export default {
  components:{
    comTab
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/util.styl'; 
.userInfo {
  width: 100%; 
  box-sizing: border-box;
  background: #fff;
  padding: 0 0.25rem;

  .infotop {
    font-size: 0.25rem;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    width: 100%;
    padding: 0.25rem 0;
    color: #888;

    .messtate {
      color: #454545;
    }
  }

  .infomid {
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 0.25rem 0;
    display: flex;
    color: #888;

    img {
      width: 1.2rem;
      height: 1.2rem;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-right: 0.2rem;
    }

    .mess {
      flex-grow: 1;
      &>div{
        padding 0 0 .15rem 0}
      .messtop {
        span {
          color: #454545;
          font-size: 0.35rem;
          margin-right: 0.2rem;
        }
      }
      .price{
        color $red
        font-weight bold
        font-size .38rem
        }
        .other{
          font-size .26rem
          div{
            display inline-block
            span {
              color #454545
              &.reds{
                color $red
                }
              padding 0 .2rem 0 0
            }
          }
          }
    }
  }
  .infobot{
    color #888
    padding .25rem 0
    }
}
</style>