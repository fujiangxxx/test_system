import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
// import Forums from '@/components/Forums';
import SelfCenter from '@/components/SelfCenter';
import Login from '@/components/Login';
import kaoshi from '@/components/kaoshi';
import view from '@/components/view';
import result from '@/components/result';
import kaoshied from '@/components/kaoshied';
import kaoshiedInfo from '@/components/kaoshiedInfo';
import daanInfo from '@/components/daanInfo';
/**个人信息设置**/
import selfSet from '@/components/selfSet';
import editPass from '@/components/editPass';
import userSet from '@/components/userSet';
import editName from '@/components/editName';
import editSex from '@/components/editSex';
import editClass from '@/components/editClass';
    Vue.use(Router)

var router= new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component:Main
    },
      // /**讨论区**/
      // {
      //     path:'/forums',
      //     name: 'forums',
      //     component: Forums
      // },
      /**个人中心**/
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
          path:'/editPass',
          name:'editPass',
          component:editPass
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
          path: '/login',
          name:'login',
          component: Login
     },
      {
          path:"/kaoshi",
          component:kaoshi
      },
      {
          path:"/view",
          component:view
      },
      {
          path:"/result",
          component:result
      },
      {
          path:"/kaoshied",
          component:kaoshied
      },
      {
          path:"/kaoshiedInfo/:zutiid",
          component:kaoshiedInfo
      },
      {
          path:"/daanInfo/:id",
          component:daanInfo
      }
  ]
})

router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        if(sessionStorage.stuLogin&&JSON.parse(sessionStorage.stuLogin).message=="yes") {
            next("/");
        }else{
            next();
        }


    }else{
        if(sessionStorage.stuLogin&&JSON.parse(sessionStorage.stuLogin).message=="yes"){
            next();
        }else{
            next("/login");
        }
    }
})


export default router;
