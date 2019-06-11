<template>
  <div class="city_body">
    
    <div class="city_list">
      <Scroller ref="city_List">
        <div>
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in hotCity" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort" ref="city_sort">
        <div v-for="(item,index) in cityList" :key="index">
          <h2>{{item.index}}</h2>
          <ul>
            <li v-for="itemList in item.list" :key="itemList.id" @tap="handleToCity(itemList.nm,itemList.id)">{{itemList.nm}}</li>
          </ul>
        </div>
      </div>
      </div>
      </Scroller>
    </div>
     <div class="city_index" >
      <ul>
        <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleTOIndex(index)" >{{item.index}}</li>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotCity: []
    };
  },
  mounted() {
    var cityList = window.localStorage.getItem('cityList');
    var hotCity = window.localStorage.getItem('hotCity')
 if(cityList && hotCity){//先判断本地存储有无数据，当无数据时再发起请求
    this.cityList = JSON.parse(cityList);
    this.hotCity = JSON.parse(hotCity)
 }else{
      this.axios.get("/api/cityList").then(res => {
      var msg = res.data.msg; //做判断，是否有数据
      if (msg === "ok") {
        var cities = res.data.data.cities;
        // [{index:'A' , list:[{nm:'啊啊',id:10}]}] 将数据改成这种结构
        var { cityList, hotCity } = this.formatCityList(cities);
        this.cityList = cityList;
        this.hotCity = hotCity;
        window.localStorage.setItem('cityList',JSON.stringify(cityList))//优化请求，存到本地存储
        window.localStorage.setItem('hotCity',JSON.stringify(hotCity))
      }
    });
 }
  },
  methods: {
    //城市数据格式化与筛选热门城市
    formatCityList(cities) {
      var cityList = [];
      var hotCity = [];

      for (var g = 0; g < cities.length; g++) {
        if (cities[g].isHot === 1) {
          hotCity.push({ nm: cities[g].nm, id: cities[g].id });
        }
      }
      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          //新添加index
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          //累加到已有index中
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      //数组排序
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });

      function toCom(firstLetter) {
        for (var t = 0; t < cityList.length; t++) {
          if (cityList[t].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      //将数据返回到外面
      return {
        cityList,
        hotCity
      };
    },
    //索引跳转
    handleTOIndex(index){
        var h2 = this.$refs.city_sort.getElementsByTagName('h2');
        // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
        this.$refs.city_List.toScrollTop(-h2[index].offsetTop)
    },
    //增加点击事件
    handleToCity(nm,id){
      this.$store.commit('city/CITY_INFO',{nm,id});//改变vuex的状态
      window.localStorage.setItem('nowNm',nm);//存到本地存储，下次打开显示上一次的地区
      window.localStorage.setItem('nowId',id);
      this.$router.push('/move/NowPlaying')//编程式路由跳转
    }

  }
};
</script>
<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>


