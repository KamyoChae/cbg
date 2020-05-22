<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
 
export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    this.getList();
  },
  methods: {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
