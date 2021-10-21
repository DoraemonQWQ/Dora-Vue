<template>
  <div id="menu">
    <el-row class="container" tag="div">
      <el-col :span="2" class="logo" tag="div">
        <router-link to="/">
          <el-image style="width: 40px; height: 40px; margin-top: 10px" :src="logoUrl" fit="cover"></el-image>
        </router-link>
      </el-col>

      <el-col class="left-menu hidden-md-and-down" :span="20" >
        <ul>
          <el-col tag="li" :sm="{span:4}" :xl="{span:3}">
            <router-link :to="{path:pageUrl.get('home')}">主页</router-link>
          </el-col>
          <el-col tag="li" :sm="{span:4}" :xl="{span:3}">
            <router-link :to="{path:pageUrl.get('anime')}">番剧</router-link>
          </el-col>
          <el-col tag="li" :sm="{span:4}" :xl="{span:3}" >
            <router-link :to="{path:pageUrl.get('games')}">游戏</router-link>
          </el-col>
          <el-col tag="li" :sm="{span:4}" :xl="{span:3}" >
            <router-link :to="{path:pageUrl.get('mmd')}">MMD</router-link>
          </el-col>
          <el-col class="hidden-md-and-down" :lg="{span:8}" :xl="{span:10}" tag="li">
            <div class="li-input">
              <el-input v-model="text" placeholder="请输入内容" prefix-icon="el-icon-search" clearable @keyup.enter.native="secrch()"></el-input>
            </div>
          </el-col>
        </ul>
      </el-col>

    </el-row>

    <el-row tag="div" class="right-menu" :gutter="20" type="flex" justify="end">
      <el-col tag="div"  :span="6" v-if="!login" class="hidden-md-and-down" style="width: 200px;">
        <div class="login-button" style="background-color: #82bb49">
          <router-link :to="{path:pageUrl.get('login')}">登录</router-link>
        </div>
      </el-col>
      <el-col tag="div" :lg="{span:10}" v-if="login" class="hidden-md-and-down" style="width: 200px">
        <el-dropdown class="user-button" style="background-color: #FFFFFF00;display: block" >
            <span class="el-dropdown-link">
<!--              <i class="el-icon-user-solid"></i>{{username}}-->
              <el-image :src=" 'http://localhost:8081/api/resource/image/' + user.avatarId" style="width: 40px;height: 40px; border-radius: 20px"></el-image>
            </span>
          <el-dropdown-menu slot="dropdown" style="width: 180px; text-align: center">
            <el-dropdown-item disabled style="color: palevioletred">
              <span>{{user.name}}</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <router-link :to="{name:pageName.get('user-home'),params: {userId:user.userId}}" style="color: black">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item >
              <span @click="logout()" style="color: black">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col tag="div" :span="6" class="hidden-md-and-down" style="width: 200px;">
        <div class="upload-button" style="background-color: red">
          <router-link :to="{path:pageUrl.get('upload')}">上传</router-link>
        </div>
      </el-col>

      <!--移动端-->
      <!-- 移动端大小时显示的菜单按钮 -->
      <el-col :span="4"  class="hidden-lg-and-up phone-menu-button" tag="div">
        <span style="cursor: pointer" @click="phomeMenu = !phomeMenu">
           <i class="el-icon-menu"></i>
        </span>
      </el-col>
    </el-row>
    <el-drawer
        title="Dora"
        :visible.sync="phomeMenu"
        size="70%">
      <div class="phone-menu">
        <div class="phone-menu-item-button">
          <span style="cursor: pointer" @click="phomeMenu = false;$router.push({path:pageUrl.get('home')})">主页</span>
        </div>
        <div class="phone-menu-item-button">
          <span style="cursor: pointer" @click="phomeMenu = false;$router.push({path:pageUrl.get('anime')})">番剧</span>
        </div>
        <div class="phone-menu-item-button">
          <span style="cursor: pointer" @click="phomeMenu = false;$router.push({path:pageUrl.get('games')})">游戏</span>
        </div>
        <div class="phone-menu-item-button">
          <span style="cursor: pointer" @click="phomeMenu = false;$router.push({path:pageUrl.get('mmd')})">MMD</span>
        </div>
        <div class="phone-menu-item-button" v-if="!$store.state.login">
          <span style="cursor: pointer" @click="phomeMenu = false;$router.push({path:pageUrl.get('login')})">登录</span>
        </div>
        <div class="phone-menu-item-button" v-if="login">
          <span style="cursor: pointer;" @click="userItem = !userItem">
            {{user.name}}
            <i :class="[userItem ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
          </span>
        </div>
        <el-collapse-transition>
          <div v-show="userItem">
            <div class="phone-menu-item-button">
              <span style="cursor: pointer;color: black;" @click="phomeMenu = false; $router.push({name: pageName.get('user-home'), params:{userId:user.userId}})">个人主页</span>
            </div>
            <div class="phone-menu-item-button">
              <span style="cursor: pointer;color: red" @click="logout()">退出</span>
            </div>
          </div>
        </el-collapse-transition>
        <div class="phone-menu-upload">
          <div class="phone-menu-upload-button" >
            <span style="cursor: pointer;background-color : red;" @click="phomeMenu = false;$router.push({path:pageUrl.get('upload')})">上传</span>
          </div>
        </div>
        <div class="phone-menu-item-button">
          <div class="phone-menu-search-input">
            <el-input v-model="text" placeholder="请输入内容" prefix-icon="el-icon-search" clearable @keyup.enter.native="phomeMenu = false;secrch()"></el-input>
          </div>
        </div>


      </div>

    </el-drawer>

  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    // logo地址
    let logoUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
    // 输入框的输入数据
    let text = '';
    // 移动端子菜单开关
    let phomeMenu = false;
    // 移动端用户栏子菜单开关
    let userItem = false;
    // 浏览器宽度
    let cliWidth = '';
    // 菜单的用户数据
    let user = {
      // 英文数字字符最多11个 中文字符最多9个
          userId: null,
          name: null,
          email: null,
          avatarId: null,
        };
    // 登录状态
    let login = false;
    // query路由跳转路径
    let pageUrl = new Map([
      ['home', '/'],
      ['mmd', '/mmd'],
      ['games', '/games'],
      ['anime', '/anime'],
      ['login', '/login'],
      ['upload','/upload'],
      ['search','/search'],
    ]);
    // param路由跳转路径
    let pageName = new Map([
      ['user-home', 'UserHome']
    ]);

    return{
      logoUrl,
      text,
      phomeMenu,
      userItem,
      cliWidth,
      user,
      login,
      pageUrl,
      pageName,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('')
    },
    secrch() {
      this.$router.push({
        path:'/search',
        query: {
          value: this.text
        }
      });
      this.text = '';
    },
  },
  watch: {
    // 监听浏览器的宽度，如果宽度大于1200px，那么就关闭移动端子菜单0
    cliWidth(val) {
      if (val >= 1200) {
        this.phomeMenu = false;
      }
    }
  },
  mounted() {
    // 获取浏览器的宽度
    this.cliWidth = document.body.offsetWidth;
    window.onresize = () => {
      return (() => {
        this.cliWidth = document.body.offsetWidth;
      })();
    }

  },
  created() {

    // 获取user数据
    if (this.$store.state.userModel.user === null) {
      if (this.$cookies.get("user") === null) {
        this.$store.dispatch('userModel/ReqUserData').then(value => {
          console.log(value)
          this.login = value.login;
          if (this.login) {
            this.user = value.user;
          }
        })
      } else {
        this.user = this.$cookies.get('user');
        this.$store.dispatch('userModel/SetUser',this.user);
        this.login = this.$store.state.userModel.login;
      }
    } else {
      console.log(this.$store.state.userModel.user)
      this.user = this.$store.state.userModel.user;
      this.login = this.$store.state.userModel.login;
    }
  }

}
</script>

<style scoped>
#menu {
  background-color: #656262;
  height: 60px;
}
a {
  text-decoration: none;
}
.container {
  padding-left: 8%;
  width: 60%;
  float: left;
}

.logo,.phone-menu {
  height: 60px;
  text-align: center;
}

/*左菜单*/
.left-menu{
  text-align: center;
}
.left-menu>ul {
  padding: 0;
  margin: 0;
}
.left-menu>ul>li {
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
  display: block;
}
.left-menu>ul>li>a {
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
  color: #ffffffff;
}
.left-menu>ul>li>a:hover {
  background-color: gray;
}
.li-input {
  height: 60px;
  line-height: 60px;
}
.li-input>input {
  height: 30px;
  text-align: center;
}
/*右菜单*/
.right-menu {
  padding-right: 8%;
  width: 40%;
  float: left;
}
.user-item>ul {
  display: none;
}
.user-item:hover .user-item>ul {
  display: block;
}
.right-menu {
  height: 60px;
  line-height: 60px;
}
.right-menu>div>button {
  width: 100%;
}
.upload-button,.login-button,.r18-button, .user-button {
  width: 100%;
  height: 40px;
  margin-top: 9px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
}
.upload-button>a,.login-button>a,.r18-button>a, .user-button>span{
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: black;
}
.upload-button>a:hover {
  background-color: #E31414A8;
  color: black;
  border-radius: 5px;
}
.login-button>a:hover {
  background-color: rgba(94, 255, 0, 0.97);
  color: black;
  border-radius: 5px;
}
.r18-button>a:hover {
  background-color: rgba(255, 251, 0, 0.98);
  color: black;
  border-radius: 5px;
}
.user-button>span:hover {
  background-color: #FFFFFF00;
  color: black;
  border-radius: 5px;
}
.user-button>span  {
  cursor: pointer;
}
/* 移动端 */
.phone-menu-button {
  height: 60px;
  width: 50px;
}
.phone-menu {
  height: 100%;
}
.phone-menu-item-button{
  width: 100%;
  height: 60px;
  line-height: 60px;
  overflow: hidden;
}
.phone-menu-item-button span{
  display: inline-block;
  width: 100%;
  color: black;
  padding: 0 20%;
}
.phone-menu-search-input {
  height: 60px;
  line-height: 60px;
  padding: 0 15%;
}
.phone-menu-upload {
  text-align: center;
}
.phone-menu-upload-button {
  padding: 5px 20%;
  height: 60px;
  line-height: 60px;
}
.phone-menu-upload-button>span {
  height: 50px;
  line-height: 50px;
  display: block;
  border-radius: 5px;
  border: 1px black solid;
  color: black;
  text-align: center;
}



</style>