import Vue from "vue";

const Anime = {
    namespaced : true,

    state : {
        pickMap: null,
        yearData : '',
        areaData : '',

    },

    mutations: {
        setPickMap(state, value) {
            state.pickMap = value.pickMap;
            state.yearData = value.year;
            state.areaData = value.area;
            // sessionStorage.setItem('pickMap', JSON.stringify(state.pickMap));
        },
    },

    actions: {
        SetPickMap(context, value) {
            context.commit("setPickMap",value);
        },

        ReqAnime() {

            return new Promise( resolve =>{
                Vue.axios.post("/public-data/public", {
                    type: "anime"
                }).then(req => {
                    resolve(req.data.json);
                })
            })
        },
        ReqFilterAnime(context) {
            let year = ""
            let area = ""

            if (context.state.areaData !== "全部" && context.state.areaData !== "") {
                area = context.state.areaData;
            }
            if (context.state.yearData !== "全部" && context.state.yearData !== "") {
                year = context.state.yearData;
            }

            return new Promise(resolve => {
                Vue.axios.post("/public-data/anime-data/filter", {
                    year: year,
                    area: area,
                }).then(req => {
                    resolve(req.data.json);
                })
            })
        }
    }
}

export default Anime;