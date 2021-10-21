<template>
<div id="anime-div">
  <div>
    <h3>热门动漫</h3>
  </div>
  <div class="more-button">
    <span style="cursor: pointer" @click="moreAnime()">更多动漫 <i class="el-icon-more"></i></span>
  </div>
  <el-row tag="div" type="flex" justify="center" :gutter="30" class="flex-warp">
    <el-col tag="div" v-for="item of arr" :key="item.a" :sm="{span: '12'}" :md="{span:'8'}" :lg="{span: '6'}" style="padding: 15px 20px">
      <el-card :body-style="{ padding: '5px'}" shadow="hover" class="anime-card">
        <router-link :to="{path:'/bangumi/video', query:{id:item.id}}">
          <el-image :src="item.imageUrl" fit="cover" style="width: 100%; height: 150px;"></el-image>
          <div class="div-introduction" style="padding: 14px">
            <h4 class="anime-title">{{item.animeName}}</h4>
            <div class="anime-introduction" v-if="item.introduction.length > 30 ? str = item.introduction.slice(0,31) + '...' : str = item.introduction">
              {{str}}
            </div>
            <div style="text-align: center">
              <span>{{item.region}}</span>
              <i></i>
              <span v-if="!item.finish">更新到{{item.p}}集</span>
              <span v-if="item.finish">全{{item.p}}集</span>
            </div>
          </div>
        </router-link>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "PlayerDiv",

  data() {
    return {
      arr: [
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南名侦探柯南名侦探柯南',
          // 级数
          p:200,
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南',
          // 级数
          p:200,
          // 类型
          type: '番剧',
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南',
          // 级数
          p:200,
          // 类型
          type: '番剧',
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南',
          // 级数
          p:200,
          // 类型
          type: '番剧',
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南',
          // 级数
          p:200,
          // 类型
          type: '番剧',
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
        {
          // 番剧id
          id: 1,
          // 封面
          imageUrl: require('../../assets/anime-image-test.png'),
          // 番名
          animeName: '名侦探柯南',
          // 级数
          p:200,
          // 类型
          type: '番剧',
          // 地区
          region: '日本',
          // 简介
          introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
              '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
              '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
              '但身体就此缩小为小学时期的模样。之后他...',
          // 是否完结
          finish: false
        },
      ]
    }
  },
  methods: {
    moreAnime() {
      this.$router.push({
        path: '/anime',
      })
    }
  }
}
</script>

<style scoped>
#anime-div {
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
.more-button {
  text-align: right;
  color: red;
}

.flex-warp {
  flex-wrap: wrap;
}
.div-introduction i {
  border-left: 1px black solid;
  margin-right: 8px;
}
.div-introduction span {
  margin-right: 10px;
  color: black;
  font-size: 12px;
}
.anime-title {
  color: black;
  font-size: 14px;
  text-align: center;
  margin: 0;
  height: 50px;
  line-height: 1.5;
}
.anime-introduction {
  padding: 10px 0;
  color: gray;
  font-size: 12px;
  height: 50px;
}
</style>