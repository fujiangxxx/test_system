import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Login from '@/components/Login';
import userSet from '@/components/userSet';
import ti from '@/components/ti';
import selectFangxiang from '@/components/selectFangxiang';
import selectBanji from '@/components/selectBanji';
import selectType from '@/components/selectType';
import zuti from '@/components/zuti';
import editPass from '@/components/editPass';
import preview from '@/components/preview';
import tied from '@/components/tied';
import tiedStu from '@/components/tiedStu';
import tiedInfo from '@/components/tiedInfo';
import daanInfo from '@/components/daanInfo';
/**个人信息**/
import SelfCenter from '@/components/SelfCenter';
import selfSet from '@/components/selfSet';
import editName from '@/components/editName';
import editSex from '@/components/editSex';
import editClass from '@/components/editClass';


Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
        name:"home",
      component: Main
    },
      {
          path: '/login',
          name:"login",
          component: Login
      },
      {
          path:'/selfCenter',
          name:'selfCenter',
          component:SelfCenter,
      },
      {
          path:'/selfSet',
          name:'selfSet',
          component:selfSet
      },
      {
          path:'/userSet',
          name:'userSet',
          component:userSet
      },
      {
          path:'/editName',
          name:'editName',
          component:editName
      },
      {
          path:'/editSex',
          name:'editSex',
          component:editSex
      },
      {
          path:'/editClass',
          name:'editClass',
          component:editClass
      },
      {
          path:"/ti",
          name:"ti",
          component: ti
      },
      {
          path:"/selectFangxiang",
          name:"/selectFangxiang",
          component:selectFangxiang
      },
      {
          path:"/selectBanji",
          component:selectBanji
      },
      {
          path:"/selectType",
          component:selectType
      },
      {
          path:"/zuti",
          component:zuti
      },
      {
          path:"/editPass",
          component:editPass
      },
      {
          path:"/preview",
          component:preview
      },
      {
          path:"/tied",
          component:tied
      },
      {
          path:"/tiedStu",
          component:tiedStu
      },
      {
          path:"/tiedInfo",
          component:tiedInfo
      },
  //    查看正确答案
      {
          path:"/daanInfo/:id",
          component:daanInfo
      }

  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="yes") {
            next("/");
        }else{
            next();
        }


    }else{
        if(sessionStorage.teachLogin&&JSON.parse(sessionStorage.teachLogin).message=="yes"){
            next();
        }else{
            next("/login");
        }
    }
})

export default router
