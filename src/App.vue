<template>
  <div id="app">
    <el-container id="test">
      <el-header id="header">
        <Menu/>
      </el-header>
      <el-main id="main">
        <router-view/>
      </el-main>
      <el-footer id="footer" style="height: 30%">
        <Footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import Menu from "@/components/App/Menu";
import Footer from "@/components/App/Footer";

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
  data() {
    let zoomvalue = 1;
    return {
      zoomvalue,
    }
  },
  // created() {
  //   if (window.screen.width <= 768) {
  //     this.zoomvalue = 0.7;
  //   } else {
  //     this.zoomvalue = 1;
  //   }
  // }
}


</script>

<style>
#main,#footer {
  padding-left: 15%;
  padding-right:15%;

}
#header {
  padding: 0;
}
#main {
  padding-top: 0;
  padding-bottom: 0;
}
#footer {
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: #eeebeb;
}
#app {
  background-color: #F5F1F16B;
}
body {
  margin: 0;
}
</style>
