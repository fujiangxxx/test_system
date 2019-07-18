import store from "@/vuex/vuex.js";
var fun = {
    user() {
        if((store.state.loginInfo)!=' ')
        {
            return JSON.parse(store.state.loginInfo);
        }else {
            return store.state.loginInfo;
        }
    }
}
export default fun;