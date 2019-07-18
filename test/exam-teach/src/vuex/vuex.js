import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //登陆的用户信息
        loginInfo:sessionStorage.getItem('teachLogin'),
        user:"",
        updateUnameed:"",
        //修改班级
        updateUclassed:"",
        ucid:"",
       // 修改性别
        updateUsexed:"",
        //组题
        fname: "",
        fid:"",
        cname:"",
        cid:"",
        startdatatime:"",
        enddatatime:"",
        tname:"",
        tid:"",
        radioInfo:[],
        checkInfo:[],
        jiandaInfo:[]
    },
    // getters: {
    //     GET_LOGININFO(state) {
    //         //先从state里面获取用户登录信息
    //         let loginInfo = state.loginInfo;
    //         //如果 state 里面获取不到，那么从sessionStorage里面获取
    //         if(!loginInfo){
    //             loginInfo =JSON.parse(window.sessionStorage.getItem('teachLogin') || null);
    //         }
    //         return loginInfo;
    //
    //     },
    // },
    // actions:{
    //
    // },
    mutations: {
        //登陆用户信息的修改
        setUserInfo(state,obj){
            var userInfo=JSON.stringify(obj);
            sessionStorage.setItem("teachLogin",userInfo);
            state.loginInfo=sessionStorage.getItem("teachLogin");
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
            // console.log(state.user)
            var userInfo=JSON.stringify(obj);
            sessionStorage.setItem("teachLogin",userInfo);
            state.loginInfo=sessionStorage.getItem("teachLogin");
            state.user=obj;
            // console.log(state.user);
        },
        setFname(state,obj){
            state.fname=obj.fname;
            state.fid=obj.fid;
        },
        setCname(state,obj){
            state.cname=obj.cname;
            state.cid=obj.cid;
        },
        setTname(state,obj){
            state.tname=obj.tname;
            state.tid=obj.tid;
        },
        setstartdatatime(state,val){
            state.startdatatime=val;
        },
        setenddatatime(state,val){
            state.enddatatime=val;
        },
        setRadioInfo(state,val){
            state.radioInfo=val;
        },
        setCheckInfo(state,val){
            state.checkInfo=val;
        },
        setJiandaInfo(state,val){
            state.jiandaInfo=val;
        }

    }
})

export default store