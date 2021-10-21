<template>
<div id="top">
  <div class="top">
    <h3>{{ title }}</h3>
  </div>
</div>
</template>

<script>
export default {
  name: "Top",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
.top {
  text-align: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px #ddd solid;
  margin-bottom: 20px;
  margin: 50px 0;
}
.top h3{
  line-height: 100px;
  font-size: 38px;
  color: pink;
  white-space: pre;
}
</style>