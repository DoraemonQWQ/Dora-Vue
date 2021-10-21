import Vue from 'vue'
import Vuex from 'vuex'
import User from "@/store/model/User";
import Anime from "@/store/model/Anime";

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    userModel: User,
    animeModel: Anime,
  }
})
