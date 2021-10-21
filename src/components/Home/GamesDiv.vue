<template>
<div id="games-div">
  <div>
    <h3>热门游戏</h3>
  </div>
  <div class="more-button">
    <span style="cursor: pointer" @click="moreAnime()">更多游戏 <i class="el-icon-more"></i></span>
  </div>
  <el-row tag="div">
    <el-col :span="24" v-for="item of arr" :key="item.id" style="margin: 10px 0">
      <el-card :body-style="{ padding: '10px 30px', width: '100%', height: '300px'}" class="games-card">
        <router-link :to="{path:'/games/detail:' + item.id}">
          <h4 class="games-title">{{item.title}}</h4>
          <el-col :md="{span:'6'}">
            <el-image :src="item.imageUrl" fit="cover" style="height: 200px; width: 100%"></el-image>
          </el-col>
          <el-col tag="div" class="div-introduction hidden-sm-and-down"  :md="{span:'18'}"  :xl="{span: '18'}">
            <div class="games-introduction">
              {{item.introduction}}
            </div>
          </el-col>
          <div class="games-download-amount">
            <span>下载次数{{item.downloads}}</span>
          </div>

        </router-link>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "GamesDiv",
  data() {
    return {
      arr: [
        {
          // 游戏id
          id: 1,
          // 游戏封面
          imageUrl: require('../../assets/beijing.png'),
          // 游戏标题
          title: '游戏测试标题',
          // 游戏简介
          introduction: '明日方舟》（《明日方舟Arknights》）是一款策略手游。你将作为罗德岛的一员,与罗德岛公开领导人阿米娅一同,雇佣人员频繁进入天灾影响后的高危地区,救助受难人群,处理矿石争端,以及对抗未知阻碍—— “罗德岛”的战术头脑,需要您的对策,请指引我们的航向。',
          // 下载量
          downloads: '10000',
        },
        {
          // 游戏id
          id: 2,
          // 游戏封面
          imageUrl: require('../../assets/galgame.png'),
          // 游戏标题
          title: '游戏测试标题',
          // 游戏简介
          introduction: '明日方舟》（《明日方舟Arknights》）是一款策略手游。你将作为罗德岛的一员,与罗德岛公开领导人阿米娅一同,雇佣人员频繁进入天灾影响后的高危地区,救助受难人群,处理矿石争端,以及对抗未知阻碍—— “罗德岛”的战术头脑,需要您的对策,请指引我们的航向。',
          // 下载量
          downloads: '10000',
        },
      ]
    }
  },
  methods: {
    moreAnime() {
      this.$router.push({
        path: '/games',
      })
    }
  }
}
</script>

<style scoped>
#games-div {
  padding: 10px 20px ;
  margin: 10px 0;
  position: relative;
}
a {
  text-decoration: none;
}
h3 {
  font-size: 26px;
  text-align: center;
}
.div-introduction {

  display: inline-block;
  height: 180px;
}
.more-button {
  text-align: right;
  color: red;
}
.games-card a {
  display: block;
  height: 100%;
  overflow: hidden;
}
.games-title {
  text-align: center;
  color: black;
  font-size: 20px;
}
.games-introduction {
  height: 100%;
  width: 100%;
  padding: 10px 0;
  padding-left: 50px;
  color: gray;
  overflow: hidden;
}
.games-download-amount {
  text-align: center;
  color: green;
}


</style>