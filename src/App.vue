<template>
  <div id="app" @scroll="handleScroll">
    <div class="title">
      <span>商品列表</span>
      <div class="tab-select">
        <div class="leftbox">
          <div
            :class="[ tabIndex === index ? 'reds': ''  ]"
            v-for="(tab, index) in tabmenu"
            :key="tab"
            @click="handleTab(index)"
          >
            <div v-if="index == 2">
              <div class="tabdiv">{{tab}}</div>
              <div class="showselect">
                <span class="showTop" :class="[decActive == 1 ? 'topActive' : '']"></span>
                <span class="showBot" :class="[decActive == 2 ? 'botActive' : '']"></span>
              </div>
            </div>
            <div v-else>{{tab}}</div>
          </div>
        </div>
        <div class="rightbox">
          <div class="selects">筛选</div>
          <div class="countdata">统计</div>
        </div>
      </div>
    </div>
    <div class="comlist">
      <commodityList :result="result" />
    </div>
  </div>
</template>

<script>
import commodityList from "./components/commodityList.vue";

export default {
  name: "App",
  data() {
    return {
      tabIndex: 0,
      decActive: 0,
      tabmenu: ["最新", "收藏", "价格"],
      result: [],
      isSendAxios: false,
      myPage: 0,
      funActive:{

      }
    };
  },
  components: {
    commodityList
  },
  mounted() {
    this.getNewList();
  },
  methods: {
    handleScroll(e) {
      const dom = e.target;
      const { scrollHeight, offsetHeight, scrollTop } = dom;
      const myHeight = scrollHeight - offsetHeight - scrollTop;
      if (myHeight < 200 && !this.isSendAxios) {
        // console.log("发送新请求");
        this.isSendAxios = true;
        this.myPage++;

        for(let key in this.funActive){
          if(key == "getPriceAsc"){
            this.funActive[key]("price%20ASC", this.myPage)
            return 
          }
          if(key == "getPriceDesc"){
            this.funActive[key]("price%20DESC", this.myPage)
            return 
          }
          this.funActive[key](this.myPage)
        } 
      }
    },
    handleTab(index) {
      this.tabIndex = index;
      this.result = [];
      this.funActive = {}
      if (this.tabIndex == 0) {
        this.getNewList();
        this.funActive["getNewList"] =  this.getNewList;
      }
      if (this.tabIndex == 1) {
        this.getStarList();
        this.funActive["getStarList"] =this.getStarList;
      }

      if ((this.decActive == 0 || this.decActive == 2) && this.tabIndex == 2) {
        this.decActive = 1;
        this.getPrice("price%20ASC", 1);
        this.funActive["getPriceAsc"] = this.getPrice 
      } else if (this.decActive == 1 && this.tabIndex == 2) {
        this.decActive = 2;
        this.getPrice("price%20DESC", 1);
         this.funActive["getPriceDesc"] = this.getPrice 
      } else {
        this.decActive = 0;
      }
    },
    _list(state = "selling_time%20DESC", page = 1) {
      this.axios({
        method: "get",
        url:
          "/api/query?view_loc=equip_list&search_type=role&order_by=" +
          state +
          "&page=" +
          page,
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      }).then(res => {
        this.isSendAxios = false;
        this.result = [...this.result, ...res.data.result];
      });
    },

    getPrice(state, page) {
      this._list(state, page);
    },
    getStarList(page) {
      this._list("collect_num%20DESC", page);
    },
    getNewList(page) {
      this._list("selling_time%20DESC", page);
    },
    getList() {
      let data = this.$qs.stringify({
        serverid: 55,
        ordersn: "202003142202516-55-BZZ9QQMWKA3JO",
        view_loc: "search"
      });

      this.axios({
        method: "post",
        url: "/api/get_equip_detail",
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        data: data
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/util.styl';

html, body {
  height: 100%;
}

#app {
  height: 100%;
  overflow-y: scroll;
}

.title {
  position: relative;
  text-align: center;
  border-bottom: 6px solid #f6f6f6;

  span {
    display: inline-block;
    font-size: 0.4rem;
    margin: 18px;
    font-weight: bold;
  }

  .tab-select>div>div {
    padding: 1em 0;
  }

  .tab-select {
    cursor: pointer;
    display: flex;
    font-size: 0.3rem;
    border: 1px solid #eee;

    .leftbox>div {
      width: 100%;
      user-select: none;
    }

    .leftbox {
      width: 80%;
      display: flex;
      justify-content: space-around;
      border-right: 1px solid #eee;
      position: relative;

      &>div {
        position: relative;
      }

      .reds {
        color: $red;
      }

      .tabdiv {
        display: inline-block;
        vertical-align: top;
      }

      .showselect {
        width: 0.4rem;
        height: 0.4rem;
        display: inline-block;
        position: relative;

        .topActive {
          border-top: 0.15rem solid transparent;
          border-bottom: 0.15rem solid $red !important;
        }

        .botActive {
          border-top: 0.15rem solid $red !important;
          border-bottom: 0.15rem solid transparent;
        }

        .showTop, .showBot {
          position: absolute;
          top: -0.5rem;
          left: -0.25rem;
          border-left: 0.08rem solid transparent;
          border-right: 0.08rem solid transparent;
          border-top: 0.15rem solid transparent;
          border-bottom: 0.15rem solid #888;
        }

        .showBot {
          top: -0.17rem;
          border-top: 0.15rem solid #888;
          border-bottom: 0.15rem solid transparent;
        }
      }
    }

    .rightbox {
      width: 20%;
      display: flex;
      justify-content: space-around;
    }
  }
}

.comlist {
  padding: 0.2em 0 0 0;
  height: 100vh;
}
</style>>  
