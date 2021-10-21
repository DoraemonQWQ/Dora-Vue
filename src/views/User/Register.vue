<template>
<div id="register">
  <Top :title="title"></Top>
  <RegisterMain></RegisterMain>
</div>
</template>

<script>
import Top from "@/components/Login&Register/Top";
import RegisterMain from "@/components/Login&Register/RegisterMain";
export default {
  name: "Register",
  components: {
    Top,
    RegisterMain
  },
  data() {
    var title = '注册';
    return {
      title,
    }
  }
}
</script>

<style scoped>

</style>