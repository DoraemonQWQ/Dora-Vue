<template>
<div id="register-main">
  <el-row tag="div">
    <!-- 768px以上 - 1200px以下的注册表单 -->
    <el-col class="form hidden-xs-only hidden-lg-and-up" v-if="swicth">
      <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="150px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名，最多9个字符哦~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码，不限制复杂度哦~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="registerForm.checkPassword" autocomplete="off" placeholder="请再次输入密码哟~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱，如果可以的话请输入大众常见邮箱哦~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" @click="submitForm(loginMethods[0])">注册</el-button>
          <el-button @click="goLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 1200px以上 - 1920px以下的注册表单 -->
    <el-col class="form hidden-md-and-down hidden-xl-only" v-if="swicth">
      <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="300px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名，最多9个字符哦~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码，不限制复杂度哦~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="registerForm.checkPassword" autocomplete="off" placeholder="请再次输入密码哟~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱，如果可以的话请输入大众常见邮箱哦~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" @click="submitForm()" :loading="loading">注册</el-button>
          <el-button @click="goLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 1920px以上的注册表单-->
    <el-col class="form hidden-lg-and-down" v-if="swicth">
      <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="500px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名，最多9个字符哦~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码，不限制复杂度哦~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="registerForm.checkPassword" autocomplete="off" placeholder="请再次输入密码哟~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱，如果可以的话请输入大众常见邮箱哦~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" @click="submitForm()">注册</el-button>
          <el-button @click="goLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 768px及以下的注册表单 -->
    <el-col class="form hidden-sm-and-up" v-if="swicth" style="height: 500px;">
      <el-form :model="registerForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" label-position="top">
        <el-form-item  label="用户名" prop="username" style="text-align: center;">
          <el-input type="text" v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名，最多9个字符哦~"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="text-align: center;">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" placeholder="请输入密码，不限制复杂度哦~" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword" style="text-align: center;">
          <el-input type="password" v-model="registerForm.checkPassword" autocomplete="off" placeholder="请再次输入密码哟~"></el-input>
        </el-form-item>
        <el-form-item  label="邮箱" prop="email" style="text-align: center;">
          <el-input type="text" v-model="registerForm.email" autocomplete="off" placeholder="请输入邮箱，如果可以的话请输入大众常见邮箱哦~"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center; padding: 50px 0" label-width="0">
          <el-button type="primary" @click="submitForm()">注册</el-button>
          <el-button @click="goLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>


  </el-row>
</div>
</template>

<script>
export default {
  name: "RegisterMain",
  data() {
    var validateUsername = async (rule,value, callback) => {
      // 用户名验证正则表达式 只能包含字母和数字
      let regLetter = /^[A-Za-z0-9]+$/;

      if (value === '') {
        callback(new Error('请输入用户名，最多9个字符哦~'));
      } else if (regLetter.test(value) !== true) {
        callback(new Error('用户名不符合啦！'));
      } else if (value.length > 9) {
        callback(new Error('名字过长啦！最多只能是9个字符啦！'))
      } else {
        callback();
      }
    };
    var validatePass =  (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码，不限制复杂度哦~'));
      } else {
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('输入刚刚的密码吧~'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两个密码不一样欸，重新输入试试吧~'));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      // 邮箱验证正则表达式
      let regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

      if (value === '') {
        callback(new Error('请输入邮箱，如果可以的话请输入大众常见邮箱哦~'));
      } else if (regEmail.test(value) !== true) {
        callback(new Error('邮箱不正确啦！'));
      } else {
        callback();
      }
    };
    return {
      swicth: true,
      loading: false,
      registerForm: {
        username:'',
        password: '',
        checkPassword: '',
        email: ''
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPassword: [
          {validator: validateCheckPass, trigger: 'blur'}
        ],
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    async submitForm() {
      // 开启登录按钮的加载动画
      this.loading = true;
      // axios异步任务强行变为同步任务
      await this.axios.post("http://192.168.0.41:8081/api/auth/login", {
        username: this.registerForm.username,
        password: this.registerForm.password,
      }).then( function (req) {
        console.log(req)
      }).catch(function (error) {
        console.log('这是error = ' + error);
      })
      // 解除加载动画
      this.loading = false;
    },
    goLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  },
}
</script>

<style scoped>
#register-main {

  margin-bottom: 100px;
}
.form {
  height: 342px;
}
.switch-button {
  text-align: center;
  margin-top: -35px;
  margin-bottom: 25px;
}
.switch-button span {
  cursor: pointer;
  font-size: 14px;
  color: blue;
}
</style>