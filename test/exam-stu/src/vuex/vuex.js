import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //登陆的用户信息
        loginInfo:sessionStorage.getItem('stuLogin'),
        user:"",
        updateUnameed:"",
        //修改班级
        updateUclassed:"",
        ucid:"",
        // 修改性别
        updateUsexed:"",
    },
    mutations: {
        //登陆用户信息的修改
        setUserInfo(state,obj){
            var userInfo=JSON.stringify(obj);
            sessionStorage.setItem("stuLogin",userInfo);
            state.loginInfo=sessionStorage.getItem("stuLogin");
            state.user=obj;
        },
        //退出 该表状态
        goquit(state){
            sessionStorage.clear();
            state.loginInfo='';
            state.user='';
        },
        //修改用户姓名
        updateUname(state,obj){
            state.updateUnameed=obj.updateUnameed;
        },
        //修改用户性别
        updateUsex(state,obj){
            state.updateUsexed=obj.updateUsexed;
        },
        //修改用户班级
        updateUclass(state,obj){
            state.updateUclassed=obj.uclass;
            state.ucid=obj.ucid;
        },
        //保存后的修改
        updateUserInfo(state,obj){
            sessionStorage.clear();
            state.loginInfo='';
            state.user='';
            console.log(state.user)
            var userInfo=JSON.stringify(obj);
            sessionStorage.setItem("stuLogin",userInfo);
            state.loginInfo=sessionStorage.getItem("stuLogin");
            state.user=obj;
            console.log(state.user);
        }

    }
})

export default store