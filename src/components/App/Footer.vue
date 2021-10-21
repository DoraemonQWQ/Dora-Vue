<template>
  <div id="footer">
    <div class="link">
      <h2>相关链接</h2>
      <div class="personalLink">
        <ul class="personaLink-ul">
          <li><el-link href="">作者博客</el-link></li>
          <li><el-link href="">github</el-link></li>
          <li><el-link href="">gitee</el-link></li>
        </ul>
      </div>
    </div>
    <div class="illustrate">
      <h5>个人练习作品，不参与该网站中任何内容的制作</h5>
    </div>
    <div class="copyright">
      <span>©</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#footer {
  padding: 0;
  text-align: center;
}
.link>h2 {
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);

  margin: 0;
}
.personaLink-ul {
  padding: 0;
  margin: 10px 0;

}
.personaLink-ul>li {
   list-style: none;
 }
.illustrate>h5 {
  margin: 20px 0;
}
.copyright, .illustrate, .link {
  display: inline;
}
</style>