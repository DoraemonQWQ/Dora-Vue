<template>
<div id="video-div">
  <video controls autoplay name="media" style="width: 300px;height: 100px">
    <source src="http://localhost:8081/api/resource/video/4" type="video/mp4">
  </video>
  <video controls autoplay name="media" style="width: 300px;height: 100px">
    <source src="http://localhost:8081/api/resource/video/3" type="video/mkv">
  </video>
  <el-image src="http://localhost:8081/api/resource/image/1" style="width: 108px; height: 192px"></el-image>
</div>
</template>

<script>
export default {
  name: "VideoDiv"
}
</script>

<style scoped>

</style>