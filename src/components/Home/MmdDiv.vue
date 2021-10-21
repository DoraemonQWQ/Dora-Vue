<template>
<div id="mmd-div">
  <div>
    <h3>热门MMD</h3>
  </div>
  <div class="more-button">
    <span style="cursor: pointer" @click="moreAnime()">更多MMD <i class="el-icon-more"></i></span>
  </div>
  <el-row tag="div" type="flex" justify="center" :gutter="30" class="flex-warp">
    <el-col tag="div" v-for="item of arr" :key="item.a" :xs="{span:'12'}" :sm="{span: '12'}" :md="{span:'8'}" :lg="{span: '8'}" style="padding: 15px 20px">
      <el-card :body-style="{ padding: '10px'}" shadow="hover" class="anime-card">
        <router-link :to="{path:'/mmd/video', query:{id:item.id}}">
          <el-image :src="item.imageUrl" fit="cover" style="width: 100%; height: 250px;"></el-image>
        </router-link>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "MmdDiv",
  data() {
    return{
      arr: [
        {
          // mmd的id
          id: 1,
          // mmd的封面图
          imageUrl: require('@/assets/mmd.jpg')
        },
        {
          // mmd的id
          id: 2,
          // mmd的封面图
          imageUrl: require('@/assets/beijing.png')
        },
        {
          // mmd的id
          id: 1,
          // mmd的封面图
          imageUrl: require('@/assets/touxiang.png')
        },
        {
          // mmd的id
          id: 1,
          // mmd的封面图
          imageUrl: require('@/assets/galgame.png')
        },
      ]
    }
  }
}
</script>

<style scoped>
* {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}
a {
  text-decoration: none;
}
h3 {
  filter: url(#diff1);
  font-size: 26px;
  text-align: center;
}
.flex-warp {
  flex-wrap: wrap;
}
.more-button {
  text-align: right;
  color: red;
}
</style>