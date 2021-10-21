<template>
<div id="filter-box">
  <el-row tag="div" >
    <el-col tag="div" class="filter">
        <div class="type">
          <span class="title">年份</span>
          <div class="bordel-title"></div>
          <ul >
            <li v-for="(item, index) of years" :key="item" @click="yearPick(index)" :class="{'pick-box':yearPickIndex === index}">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

      <div class="type">
        <span class="title">地区</span>
        <div class="bordel-title"></div>
        <ul>
          <li v-for="(item, index) of area" :key="item" @click="areaPick(index)" :class="{'pick-box':areaPickIndex  === index}">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: "FlterBox",
  data() {
    let years = [
        '全部',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021'
    ];
    let area = [
        '全部',
        '日本',
        '中国'
    ];
    // 年份被选中的索引
    let yearPickIndex = 0;
    // 地区被选择的索引
    let areaPickIndex = 0;
    // 被选中的标签
    let pickItem = new Map([
        ['year', 0],
        ['year-data', ''],
        ['area', 0],
        ['area-data', '']
    ]);

    return {
      years,
      area,
      areaPickIndex,
      yearPickIndex,
      pickItem,
    }
  },
  methods: {
    areaPick(index) {
      // this.areaPickIndex = index;
      this.pickItem.set('area',index);
      this.pickItem.set('area-data',this.area[index]);
      this.$store.dispatch('animeModel/SetPickMap', {
        year: this.pickItem.get('year-data'),
        area: this.pickItem.get('area-data'),
        pickMap: this.pickItem
      });

      this.$router.push({
        path: '/anime',
        query: {
          area: this.pickItem.get('area'),
          year: this.pickItem.get('year')
        }

      })

      // console.log(this.pickItem)
    },
    yearPick(index) {
      // this.yearPickIndex = index;
      this.pickItem.set('year', index);
      this.pickItem.set('year-data', this.years[index]);
      this.$store.dispatch('animeModel/SetPickMap', {
        year: this.pickItem.get('year-data'),
        area: this.pickItem.get('area-data'),
        pickMap: this.pickItem
      });

      this.$router.push({
        path: '/anime',
        query: {
          area: this.pickItem.get('area'),
          year: this.pickItem.get('year')
        }

      })

      // console.log(this.pickItem)
    }
  },
  watch: {
    '$route': {
      handler(to) {
        // console.log(to)
        this.areaPickIndex = to.query.area === undefined ? 0 : parseInt(to.query.area,10);
        this.yearPickIndex = to.query.year === undefined ? 0 : parseInt(to.query.year,10);
        this.pickItem.set('area',this.areaPickIndex);
        this.pickItem.set('year',this.yearPickIndex);
        this.$store.dispatch('animeModel/SetPickMap', {
          year: this.pickItem.get('year-data'),
          area: this.pickItem.get('area-data'),
          pickMap: this.pickItem
        });
      }
    }
  },
  created() {
    this.areaPickIndex = this.$route.query.area === undefined ? 0 : parseInt(this.$route.query.area,10);
    this.yearPickIndex = this.$route.query.year === undefined ? 0 : parseInt(this.$route.query.year,10);
    this.pickItem.set('area',this.areaPickIndex);
    this.pickItem.set('year',this.yearPickIndex);
    this.$store.dispatch('animeModel/SetPickMap', {
      year: this.pickItem.get('year-data'),
      area: this.pickItem.get('area-data'),
      pickMap: this.pickItem
    });
  }

}
</script>

<style scoped>
.filter {
  width: 100%;
  padding: 10px 0;
  border-bottom: #145672 1px solid;
}

.type {
  padding: 0;
  width: 100%;
  height: auto;
  margin: 0;
  display: inline-block;
}
.title {
  padding: 5px 10px;
  color: #FFFFFF;
  background-color: #00a6ff;
  border-radius: 15px;
}
.bordel-title {
  width: 200px;
  height: 1px;
  padding-top: 10px;
  border-bottom: 1px #00a6ff solid;
  margin-left: 50px;
}

.type ul {
  padding: 0 50px;
}

.type ul li {
  list-style: none;
  padding: 5px 10px;
  margin: 0;
  float: left;
  display: block;
}
.type ul li span {
  cursor: pointer;
}
.pick-box {
  color: #00a6ff;
  pointer-events: none;
}

</style>