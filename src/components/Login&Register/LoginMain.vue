<template>
<div id="login-main">
  <el-row tag="div">
    <!-- 768px以上 - 1200px以下的登录表单 -->
    <!-- 用户名登录表单 -->
    <el-col class="form hidden-xs-only hidden-lg-and-up" v-if="swicth">
      <div class="switch-button"><span @click="swicth = !swicth">邮箱登录</span></div>
      <el-form :model="usernameForm" status-icon :rules="rules" ref="ruleForm" label-width="150px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="usernameForm.username" autocomplete="off" placeholder="输入你注册时的用户名哟~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="usernameForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="usernameForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[0])">登录</el-button>
          <el-button @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 邮箱登录表单 -->
    <el-col class="form hidden-xs-only hidden-lg-and-up" v-if="!swicth">
      <div class="switch-button"><span @click="swicth = !swicth">用户名登录</span></div>
      <el-form :model="emailForm" status-icon :rules="rules" ref="ruleForm" label-width="150px">
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="emailForm.email" autocomplete="off" placeholder="输入你注册时的邮箱哟~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="emailForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 150px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="emailForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[1])">登录</el-button>
          <el-button  @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 1200px以上 - 1920px以下的登录表单 -->
    <!-- 用户名登录表单 -->
    <el-col class="form hidden-md-and-down hidden-xl-only" v-if="swicth">
      <div class="switch-button"><span @click="swicth = !swicth">邮箱登录</span></div>
      <el-form :model="usernameForm" status-icon :rule="rules" ref="ruleForm" label-width="300px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="usernameForm.username" autocomplete="off" placeholder="输入你注册时的用户名哟~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="usernameForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="usernameForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[0])">登录</el-button>
          <el-button @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 邮箱登录表单 -->
    <el-col class="form hidden-md-and-down hidden-xl-only" v-if="!swicth">
      <div class="switch-button"><span @click="swicth = !swicth">用户名登录</span></div>
      <el-form :model="emailForm" status-icon :rules="rules" ref="ruleForm" label-width="300px">
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="emailForm.email" autocomplete="off" placeholder="输入你注册时的邮箱哟~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="emailForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 300px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="emailForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[1])">登录</el-button>
          <el-button  @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 1920px以上的登录表单-->
    <!-- 用户名登录表单 -->
    <el-col class="form hidden-lg-and-down" v-if="swicth">
      <div class="switch-button"><span @click="swicth = !swicth">邮箱登录</span></div>
      <el-form :model="usernameForm" status-icon :rules="rules" ref="ruleForm" label-width="500px">
        <el-form-item  label="用户名" prop="username">
          <el-input type="text" v-model="usernameForm.username" autocomplete="off" placeholder="输入你注册时的用户名哟~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="usernameForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="usernameForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[0])">登录</el-button>
          <el-button @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 邮箱登录表单 -->
    <el-col class="form hidden-lg-and-down" v-if="!swicth">
      <div class="switch-button"><span @click="swicth = !swicth">用户名登录</span></div>
      <el-form :model="emailForm" status-icon :rules="rules" ref="ruleForm" label-width="500px">
        <el-form-item  label="邮箱" prop="email">
          <el-input type="text" v-model="emailForm.email" autocomplete="off" placeholder="输入你注册时的邮箱哟~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="emailForm.password" autocomplete="off" placeholder="输入你的密码哟~" style="padding-right: 500px"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="emailForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[1])">登录</el-button>
          <el-button  @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!-- 768px及以下的登录表单 -->
    <!-- 用户名登录表单 -->
    <el-col class="form hidden-sm-and-up" v-if="swicth">
      <div class="switch-button"><span @click="swicth = !swicth">邮箱登录</span></div>
      <el-form :model="usernameForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" label-position="top">
        <el-form-item  label="用户名" prop="username" style="text-align: center">
          <el-input type="text" v-model="usernameForm.username" autocomplete="off" placeholder="输入你注册时的用户名哟~"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="text-align: center">
          <el-input type="password" v-model="usernameForm.password" autocomplete="off" placeholder="输入你的密码哟~"></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="usernameForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[0])">登录</el-button>
          <el-button @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 邮箱登录表单 -->
    <el-col class="form hidden-sm-and-up" v-if="!swicth">
      <div class="switch-button"><span @click="swicth = !swicth">用户名登录</span></div>
      <el-form :model="emailForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" label-position="top">
        <el-form-item  label="邮箱" prop="email" style="text-align: center">
          <el-input type="text" v-model="emailForm.email" autocomplete="off" placeholder="输入你注册时的邮箱哟~"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="text-align: center">
          <el-input type="password" v-model="emailForm.password" autocomplete="off" placeholder="输入你的密码哟~" ></el-input>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-checkbox v-model="emailForm.rememberMe">记住我</el-checkbox>
        </el-form-item>
        <el-form-item style="text-align: center" label-width="0">
          <el-button type="primary" :disabled="disabled" :loading="loading" @click="submitForm(loginMethods[1])">登录</el-button>
          <el-button  @click="goRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>
</div>
</template>

<script>

export default {
  name: "LoginMain",
  data() {
    var validateUsername = (rule, value, callback) => {
      // 验证用户名的正则表达式
      let regLetter = /^[A-Za-z0-9]+$/;

      if (value === '') {
        callback(new Error('输入你注册时的用户名呀~'));
      } else if (regLetter.test(value) !== true) {
        callback(new Error('用户名不符合啦！'));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      // 验证邮箱的正则表达式
      let regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;

      if (value === '') {
        callback(new Error('输入你注册时的邮箱呀~'));
      } else if (regEmail.test(value) !== true) {
        callback(new Error('邮箱不符合啦！'))
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('输入你的密码呀~'));
      } else {
        callback();
      }
    };
    return {
      swicth: true,
      loading: false,
      disabled: false,
      loginMethods: ['username', 'email'],
      usernameForm: {
        username: '',
        password: '',
        rememberMe: false,
      },
      emailForm: {
        email: '',
        password: '',
        rememberMe: false,
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: 'blur'}
        ],
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(loginMethod) {
      // 开启登录按钮的加载动画
      this.loading = true;
      // axios异步任务强行变为同步任务
      let loginFrom = null;
      console.log(this.$store)
      if (loginMethod === 'username') {
        // 将表单的数据进行封装
        loginFrom = {
          method: loginMethod,
          username: this.usernameForm.username,
          password: this.usernameForm.password,
          rememberMe: this.usernameForm.rememberMe
        }
      }else {
        loginFrom = {
          method: loginMethod,
          username: this.emailForm.email,
          password: this.emailForm.password,
          rememberMe: this.emailForm.rememberMe
        }
      }
      // 调用vuex中的登录请求函数
      this.$store.dispatch('userModel/LoginReq', loginFrom).then(value => {
        if (value.success) {
          // 显示登录成功提示
          this.$message({
            message: value.msg,
            center: true,
            type: 'success',
            duration: 1000*3,
            showClose: true
          })
          // 3秒后返回上一级
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000 * 3)
        } else {
          // 提示登录失败
          this.$message({
            message: value.msg,
            center: true,
            type: 'warning',
            duration: 1000*5,
            showClose: true
          })
          // 清空输入框的数据
          if (loginMethod === 'username') {
            this.usernameForm = {
              username: '',
              password: '',
              rememberMe: false,
            };
          } else {
            this.emailForm = {
              email: '',
              password: '',
              rememberMe: false,
            };
          }
          // 解除加载动画
          this.loading = false;
        }
      }).catch( error => {
        console.log(error);

        this.loading = false;
        this.disabled = true
        this.$message({
            message: error,
            center: true,
            type: "error",
            duration: 1000 * 5,
            showClose: true
        });

        setTimeout(() => {
          this.disabled = false;
        }, 5000)
      })
    },
    goRegister() {
      this.$router.push({
        path: '/register'
      })
    }
  },
}
</script>

<style scoped>
#login-main {

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