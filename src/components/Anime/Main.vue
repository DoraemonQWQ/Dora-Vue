<template>
<div id="main">

  <el-row tag="div" :class="{'default-height': insufficentContent}">

    <el-col tag="div" v-for="(item) of partAnimeList" :key="item.a" :sm="{span: '12'}" :md="{span:'8'}" :lg="{span: '6'}" style="padding: 15px 20px" v-if="!noContent">
      <el-card :body-style="{ padding: '5px'}" shadow="hover" class="anime-card">
        <router-link :to="{path:'/bangumi/video', query:{id:item.id}}">
          <el-image :src="item.imageUrl" fit="cover" style="width: 100%; height: 150px;"></el-image>
          <div class="div-introduction" style="padding: 14px">
            <h4 class="anime-title">{{item.name}}</h4>
            <div class="anime-introduction" v-if="item.introduction.length > 30 ? str = item.introduction.slice(0,31) + '...' : str = item.introduction">
              {{str}}
            </div>
            <div style="text-align: center">
              <span>{{item.region}}</span>
              <i></i>
              <span v-if="!item.finish">更新到{{item.quanity}}集</span>
              <span v-if="item.finish">全{{item.quanity}}集</span>
            </div>
          </div>
        </router-link>
      </el-card>
    </el-col>

    <el-col v-if="noContent" class="no-content">
      <span>没有动漫哦~</span>
    </el-col>


  </el-row>
  <el-pagination
      background
      layout="prev, pager, next"
      :total="totalPages * 10"
      style="text-align: center"
      @current-change="switchPageContent"
  >
  </el-pagination>
</div>
</template>

<script>
export default {
  name: "Main",
  data() {
    // 从后台获取的整个anime页面数据
    let completeAnimeList = [];
    // 从总数据中切割出的数据
    let partAnimeList = [];
    // 分页栏中分页总数
    let totalPages = 1;
    // 每页显示的内容数量
    let displayQuantity = 6;
    // 是否填充高度，当内容不足以规定每页显示的数量时，为true
    let insufficentContent = false;
    // 可显示内容为空时为true
    let noContent = false;
    // let arr = [
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    //   {
    //     // 番剧id
    //     id: 1,
    //     // 封面
    //     imageUrl: require('../../assets/anime-image-test.png'),
    //     // 番名
    //     animeName: '名侦探柯南',
    //     // 级数
    //     p:200,
    //     // 类型
    //     type: '番剧',
    //     // 地区
    //     region: '日本',
    //     // 简介
    //     introduction: '主角工藤新一原本是一位颇具名声的高中生侦探，' +
    //         '在目击黑暗组织的地下交易后，正准备追踪时却被突袭击昏，' +
    //         '并被灌下代号为“APTX4869”的不明药物。后来虽然幸免于死，' +
    //         '但身体就此缩小为小学时期的模样。之后他...',
    //     // 是否完结
    //     finish: false
    //   },
    // ]
    let arr = [];
    return {
      completeAnimeList,
      partAnimeList,
      totalPages,
      displayQuantity,
      insufficentContent,
      noContent,
      arr,
    }
  },
  methods: {
    switchPageContent(val) {
      if (val === 1) {
        // 当用户重新点会第一分页按钮时，此内容才会进行
        this.partAnimeList = this.completeAnimeList.slice(0,this.displayQuantity);
        this.partAnimeList.length > this.displayQuantity ? this.insufficentContent = false : this.insufficentContent = true;
      } else if (val === this.totalPages) {
        this.partAnimeList = this.completeAnimeList.slice(this.displayQuantity * (val-1), this.completeAnimeList.length)
        this.insufficentContent = true;
      } else {
        this.partAnimeList = this.completeAnimeList.slice(this.displayQuantity * (val - 1), val)
        this.insufficentContent = false;
      }
    },

    reqData() {

      if (this.$store.state.animeModel.pickMap.get("year") === 0 && this.$store.state.animeModel.pickMap.get("area") === 0) {
        // console.log(this.$store.state.animeModel.areaData);
        // console.log(this.$store.state.animeModel.yearData);
        this.$store.dispatch('animeModel/ReqAnime').then( value => {
          console.log(value)
            this.updateData(value);
        })
      } else {
        this.$store.dispatch('animeModel/ReqFilterAnime').then(value => {

            this.updateData(value);
        })
      }
    },
    updateData(value) {
      if (value !== undefined) {
        if (value.length !== 0) {
          this.noContent = false;
          // 后台获取的数据总数不为0时，将数据赋值给 completeAnimeList
          this.completeAnimeList = value
          // 如果总数据的总数大于规定的显示数量，就计算分页
          if (this.completeAnimeList.length > this.displayQuantity) {
            // 然后进行计算分页的总数
            this.totalPages = this.completeAnimeList.length % this.displayQuantity === 0
                ? this.completeAnimeList.length / this.displayQuantity
                : (this.completeAnimeList.length / this.displayQuantity) + 1;
          } else {
            // 如果小于，那么就等于1页
            this.totalPages = 1;
          }
          // 判断总数据的大小
          if (this.completeAnimeList <= this.displayQuantity) {
            // 如果小于等于规定显示内容，直接赋值给用来显示的数组
            this.partAnimeList = this.completeAnimeList;
            this.insufficentContent = true;
          } else {
            // 进行第一页的切割
            this.partAnimeList = this.completeAnimeList.slice(0,this.displayQuantity);
            // 判断第一页的大小，如果不足一页的显示内容，那么就设置 insufficentContent = true
            this.partAnimeList.length > this.displayQuantity ? this.insufficentContent = false : this.insufficentContent = true;
          }
        } else {
          this.noContent = true;
        }
      } else {
        this.noContent = true;
      }
    }
  },
  watch: {
    '$store.state.animeModel.areaData':function () {
      this.reqData()
    },

    '$store.state.animeModel.yearData':function () {
      this.reqData()
    }
  },
  created() {
    // 在dom生成前请求后台
    this.reqData();


  }
}
</script>

<style scoped>
#main {
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
  margin: 0;
  color: black;
  font-size: 14px;
  text-align: center;
  height: 50px;
  line-height: 1.5;
}
.anime-introduction {
  padding: 10px 0;
  color: gray;
  font-size: 12px;
  height: 50px;
}
.default-height {
  height: 800px;
  width: 100%;
}
.no-content {
  width: 100%;
  height: 500px;
  text-align: center;

}
</style>