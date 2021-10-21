<template>
<div id="login">
  <Top :title=title></Top>
  <LoginMain></LoginMain>
</div>
</template>

<script>
import Top from "@/components/Login&Register/Top";
import LoginMain from "@/components/Login&Register/LoginMain";
export default {
  name: "Login",
  components: {
    Top,
    LoginMain,
  },
  data() {
    return{
      title: '登录',
    }
  }
}
</script>

<style scoped>
#login {

}
</style>