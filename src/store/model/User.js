import Vue from "vue";

const User = {
    namespaced: true,
    // 原数据
    state: {
        // 是否登录
        login: false,
        user: null,
        // {
        //   // 用户id
        //   userId: 0,
        //   // 用户名
        //   name: '',
        //   // 用户邮箱
        //   email: '',
        //   // 用户头像id 用来查询静态资源api
        //   avatarId: '',
        // },

    },
    // 同等与dao
    mutations: {
        setUser(state,value) {

            state.user = {
                userId : value.userId,
                name: value.name,
                email : value.email,
                avatarId: 0,
            }
            // 从后端获得的用户拥有的图片集合
            if (value.images !== [] && value.images !== undefined) {
                // 循环图片集合
                for (let i = 0; i < value.images.length; i++) {
                    // 搜索头像的id
                    var index = value.images[i].name.indexOf("avatar");
                    // 判断搜索到的索引
                    if (index !== -1) {
                        // 如果不为-1，那么就将该循环的图片id存入到vuex的user对象中
                        state.user.avatarId = value.images[i].id;
                    } else {
                        // 如果为-1，那么就给他默认头像id
                        state.user.avatarId = 1;
                    }
                }
            } else {
                state.user.avatarId = value.avatarId;
            }
            // 将用户信息存cookie中
            Vue.$cookies.set("user",state.user);
            if ( state.user.userId !== 0 ) {
                state.login = true;
            }
        },
        delUser(state) {
            // 清除Vuex中的user用户数据
            state.user = null;
            // 清楚cookie中的user
            Vue.$cookies.remove("user");
            // 删除localStorage中的token
            localStorage.removeItem("token");
        },
        updateUser(state,value) {
            state.user = value;
            state.login = true;
        }
    },
    // 同等与service
    actions: {
        // 登录后传入数据
        SetUser(context, value) {
            context.commit('setUser', value);
            return context.state.login;
        },
        // 注销，删除localStorage中的token
        LogoutUser(context) {
            context.commit('delUser');
            return context.state.login;
        },
        UpdateUser(context, value) {
            context.commit('updateUser', value);
            return context.state.login;
        },
        ReqUserData(context) {
            return new Promise(resolve => {
                Vue.axios.post('/public-data/user-data').then(req => {
                    if (req.data.success) {
                        let user = {
                            userId: req.data.json.userId,
                            name: req.data.json.username,
                            email: req.data.json.email,
                            images: req.data.json.images,
                        };
                        context.commit('setUser', user);
                        resolve({
                            user: context.state.user,
                            login: context.state.login
                        });
                    } else {
                        // token过期，删除
                        localStorage.removeItem("token");
                        resolve({
                            user: null,
                            login: false,
                        });
                    }
                })
            })
        },
        // 登录请求
        LoginReq(context, value) {
            return new Promise( (resolve, reject) => {
                Vue.axios.post("/auth/login", {
                    method: value.method,
                    username: value.username,
                    password: value.password,
                    rememberMe: value.rememberMe
                }).then(req => {
                    console.log(req)
                    if (req.data.success) {
                        // 将用户数据进行封装
                        let user = {
                            userId: req.data.json.userId,
                            name: req.data.json.username,
                            email: req.data.json.email,
                            images: req.data.json.images,
                        };
                        // 保存token
                        localStorage.setItem("token", req.headers.authorization);
                        // 登录成功
                        context.commit('setUser',user);

                        // 返回提示
                        resolve({
                            success: true,
                            msg: req.data.msg
                        })

                    } else {
                        // 登录失败
                        resolve({
                            success: false,
                            msg: req.data.msg
                        })
                    }
                }).catch(() => {
                    reject("登录异常，请稍后再试")
                });
            })
        }
    }
}

export default User;