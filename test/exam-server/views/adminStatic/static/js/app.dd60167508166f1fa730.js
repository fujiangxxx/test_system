webpackJsonp([1],{"+54a":function(t,e){},"1cRM":function(t,e){},"6scZ":function(t,e){},"8TX5":function(t,e){},"8fAW":function(t,e){},"8v5h":function(t,e){},HFvK:function(t,e){},HIAi:function(t,e){},Jmt5:function(t,e){},Lt7f:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("zL8q"),s=n.n(i),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("Lt7f")},null,null).exports,l=n("/ocq"),c={methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{attrs:{span:12}},[n("el-menu",{attrs:{"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("考生管理")])]),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("基本操作")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[n("router-link",{attrs:{to:"/selectStu"}},[t._v("考生查询")])],1)],2)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("老师管理")])]),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("基本操作")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[n("router-link",{attrs:{to:"/selectTe"}},[t._v("老师查询")])],1)],2)],2),t._v(" "),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("班级管理")])]),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("基本操作")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[n("router-link",{attrs:{to:"/addClasses"}},[t._v("班级添加")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[n("router-link",{attrs:{to:"/selectClasses"}},[t._v("班级查询")])],1)],2)],2),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",[t._v("试题管理")])]),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("方向管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"1-1"}},[n("router-link",{attrs:{to:"/addFangxiang"}},[t._v("方向添加")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"1-2"}},[n("router-link",{attrs:{to:"/selectFangxiang"}},[t._v("方向查询")])],1)],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("类型管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[n("router-link",{attrs:{to:"/addType"}},[t._v("类型添加")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[n("router-link",{attrs:{to:"/typeSelect"}},[t._v("类型查询")])],1)],2),t._v(" "),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("试题操作")]),t._v(" "),n("el-menu-item",{attrs:{index:"3-1"}},[n("router-link",{attrs:{to:"/addTest"}},[t._v("试题添加")])],1)],2)],2)],1)],1)},staticRenderFns:[]};var f={components:{Menu:n("VU/8")(c,u,!1,function(t){n("NIPf")},"data-v-1d88c0aa",null).exports},data:function(){return{uname:sessionStorage.uname}},methods:{logout:function(){sessionStorage.removeItem("login"),sessionStorage.removeItem("uname"),sessionStorage.removeItem("id"),this.$router.push("/login")}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("div",{staticClass:"userInfo"},[n("el-button",{attrs:{type:"danger"},on:{click:t.logout}},[t._v("退出")])],1),t._v(" "),n("el-header",{attrs:{height:"15vh"}},[t._v("欢迎来到"+t._s(t.uname)+"登陆考试管理系统")]),t._v(" "),n("el-container",{staticClass:"body"},[n("el-aside",{staticStyle:{background:"#fff"},attrs:{width:"200px"}},[n("Menu")],1),t._v(" "),n("el-main",{staticStyle:{"text-align":"left"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(f,m,!1,function(t){n("8fAW")},"data-v-f35f131e",null).exports,p={name:"welcome",data:function(){return{uname:sessionStorage.uname}}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wel"},[this._v("\n    欢迎来到 "+this._s(this.uname)+" 来到 主页\n")])},staticRenderFns:[]};var v=n("VU/8")(p,h,!1,function(t){n("8TX5")},"data-v-43c39caa",null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    添加考生\n")])},staticRenderFns:[]};var b=n("VU/8")({name:"add-stu"},_,!1,function(t){n("k04J")},"data-v-7c7146d1",null).exports,g={name:"add-fangxiang",data:function(){return{form:{fname:""},message:""}},methods:{onSubmit:function(){var t=this;""==this.form.fname?this.message="请填写内容":fetch("/api/fangxiang/addFangxiang?fname="+this.form.fname).then(function(t){return t.text()}).then(function(e){"ok"===e?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.form.fname=""):(t.$message({message:"添加失败",type:"error",duration:1e3}),t.form.fname="")})},cancel:function(){this.form.fname=""}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n\n     "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:"方向名称"}},[n("el-input",{model:{value:t.form.fname,callback:function(e){t.$set(t.form,"fname",e)},expression:"form.fname"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("添加")]),t._v(" "),n("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var y=n("VU/8")(g,x,!1,function(t){n("WXf0")},"data-v-eaf808ba",null).exports,k={name:"select-fangxiang",methods:{handleClick:function(t){var e=this;fetch("/api/fangxiang/del/"+t).then(function(t){return t.text()}).then(function(n){"ok"==n&&(e.tableData=e.tableData.filter(function(e){if(e.fid!=t)return e}))})}},data:function(){return{tableData:[]}},mounted:function(){var t=this;fetch("/api/fangxiang/select").then(function(t){return t.json()}).then(function(e){t.tableData=e})}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{prop:"fid",label:"id"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fname",label:"方向名称"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.handleClick(e.row.fid)}}},[t._v("删除")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"}},[n("router-link",{attrs:{to:"/editFangxiang/"+e.row.fid}},[t._v(" 编辑 ")])],1)]}}])})],1)},staticRenderFns:[]};var w=n("VU/8")(k,$,!1,function(t){n("8v5h")},"data-v-09625bb8",null).exports,S={name:"edit-fangxiang",data:function(){return{form:{fname:""},message:""}},mounted:function(){var t=this;fetch("/api/fangxiang/editSelect/"+this.$route.params.fid).then(function(t){return t.json()}).then(function(e){t.form.fname=e.fname})},methods:{editCon:function(){var t=this,e="fname="+this.form.fname+"&fid="+this.$route.params.fid;fetch("/api/fangxiang/editCon/?"+e).then(function(t){return t.text()}).then(function(e){t.message="ok"==e?"成功":"失败"})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n\n    "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:"方向名称"}},[n("el-input",{model:{value:t.form.fname,callback:function(e){t.$set(t.form,"fname",e)},expression:"form.fname"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.editCon}},[t._v("修改")]),t._v(" "),n("el-button",[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var F=n("VU/8")(S,C,!1,function(t){n("ly/j")},"data-v-2d95ec70",null).exports,R={name:"login",data:function(){return{labelPosition:"left",rule:{uname:"",upass:""},message:""}},methods:{loginfor:function(){var t=this,e="uname="+this.rule.uname+"&upass="+this.rule.upass;fetch("/api/login/check?"+e).then(function(t){return t.json()}).then(function(e){"yes"==e.message?(sessionStorage.login="yes",sessionStorage.id=e.id,sessionStorage.uname=e.uname,t.$router.push("/")):(t.rule.uname="",t.rule.upass="",t.message="登陆失败")})}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("div",{staticClass:"loginList"},[n("div",{staticClass:"title"},[t._v("管理员登陆页")]),t._v("\n     "+t._s(t.message)+"\n     "),n("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.rule}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:t.rule.uname,callback:function(e){t.$set(t.rule,"uname",e)},expression:"rule.uname"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.rule.upass,callback:function(e){t.$set(t.rule,"upass",e)},expression:"rule.upass"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:t.loginfor}},[t._v("登陆")])],1)],1)],1)])},staticRenderFns:[]};var E=n("VU/8")(R,D,!1,function(t){n("i4Tl")},"data-v-4af3a10a",null).exports,j={name:"add-classes",data:function(){return{form:{name:"",fid:""},message:"",datas:[]}},mounted:function(){var t=this;fetch("/api/fangxiang/select").then(function(t){return t.json()}).then(function(e){t.datas=e})},methods:{onSubmit:function(){var t=this,e="name="+this.form.name+"&fid="+this.form.fid;fetch("/api/classes/add?"+e).then(function(t){return t.text()}).then(function(e){"ok"==e&&(t.message="添加成功")})}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[t._v("\n    "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"班级名称"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"课程方向"}},[n("el-select",{attrs:{placeholder:"请选择方向"},model:{value:t.form.fid,callback:function(e){t.$set(t.form,"fid",e)},expression:"form.fid"}},t._l(t.datas,function(t){return n("el-option",{key:t.id,attrs:{label:t.fname,value:t.fid}})}))],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("添加")])],1)],1)],1)},staticRenderFns:[]};var V=n("VU/8")(j,U,!1,function(t){n("zRbS")},"data-v-2d54fe9a",null).exports,T={name:"select-classes",data:function(){return{tableData:[]}},mounted:function(){var t=this;fetch("/api/classes/select").then(function(t){return t.json()}).then(function(e){console.log(e),t.tableData=e})}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[e("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"班级名称",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"fname",label:"方向名称"}})],1)},staticRenderFns:[]};var L=n("VU/8")(T,A,!1,function(t){n("lFbC")},"data-v-10e3180e",null).exports,M={name:"select-stu",data:function(){return{tableData:[],page:0,pages:0,like:""}},methods:{addSign:function(){this.$router.push({path:"/addSignStu"})},addMore:function(){this.$router.push({path:"/addMoreStu"})},search:function(){var t=this;fetch("/api/stu/select?page=0&like="+this.like).then(function(t){return t.json()}).then(function(e){t.tableData=e}),fetch("/api/stu/selectAll?like="+this.like).then(function(t){return t.text()}).then(function(e){t.pages=e})},up:function(){var t=this;this.page>0&&(this.page-=1,fetch("/api/stu/select?page="+this.page+"&like="+this.like).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e}))},next:function(){var t=this;this.page<this.pages-1&&(this.page+=1,fetch("/api/stu/select?page="+this.page+"&like="+this.like).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e}))}},mounted:function(){var t=this;fetch("/api/stu/selectAll").then(function(t){return t.text()}).then(function(e){t.pages=e}),fetch("/api/stu/select?page="+this.page).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e})}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary",round:""},on:{click:t.addSign}},[t._v("单条添加       ")]),t._v(" "),n("el-button",{attrs:{type:"success",round:""},on:{click:t.addMore}},[t._v("多条添加")]),t._v(" "),n("el-input",{staticStyle:{display:"inline-block",width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.like,callback:function(e){t.like=e},expression:"like"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cname",label:"班级"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"性别"}})],1),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(e){t.up()}}},[t._v("上一下")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(e){t.next()}}},[t._v("下一页")])],1)},staticRenderFns:[]};var I=n("VU/8")(M,W,!1,function(t){n("6scZ")},"data-v-3e630251",null).exports,q={name:"select-teach",data:function(){return{tableData:[],page:0,pages:0,like:""}},methods:{search:function(){var t=this;fetch("/api/teach/select?page=0&like="+this.like).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e}),fetch("/api/teach/selectAll?like="+this.like).then(function(t){return t.text()}).then(function(e){t.pages=e})},up:function(){var t=this;this.page>0&&(this.page-=1,fetch("/api/teach/select?page="+this.page+"&like="+this.like).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e}))},next:function(){var t=this;this.page<this.pages-1&&(this.page+=1,fetch("/api/teach/select?page="+this.page+"&like="+this.like).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e}))}},mounted:function(){var t=this;fetch("/api/teach/selectAll").then(function(t){return t.text()}).then(function(e){t.pages=e}),fetch("/api/teach/select?page="+this.page).then(function(t){return t.json()}).then(function(e){for(var n=0;n<e.length;n++)switch(e[n].sex){case 1:e[n].sex="男";break;case 3:e[n].sex="女";break;case 2:e[n].sex="保密"}t.tableData=e})}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"el-button el-button--primary el-icon-plus",attrs:{to:"/addSignTe",tag:"button",type:"button"}},[t._v("单条添加")]),t._v(" "),n("router-link",{staticClass:"el-button el-button--primary el-icon-more",attrs:{to:"/addMoreTe",tag:"button",type:"button"}},[t._v("批量添加")]),t._v(" "),n("el-input",{staticStyle:{display:"inline-block",width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.like,callback:function(e){t.like=e},expression:"like"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-search",round:""},on:{click:t.search}}),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"id",label:"id",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cname",label:"班级"}}),t._v(" "),n("el-table-column",{attrs:{prop:"fname",label:"方向"}}),t._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"性别"}})],1),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(e){t.up()}}},[t._v("上一下")]),t._v(" "),n("el-button",{attrs:{type:"info"},on:{click:function(e){t.next()}}},[t._v("下一页")])],1)},staticRenderFns:[]};var P=n("VU/8")(q,z,!1,function(t){n("+54a")},"data-v-d1b0db98",null).exports,H={name:"add-sign-stu",data:function(){return{form:{name:"",cid:"",sex:2},datas:[],message:""}},mounted:function(){var t=this;fetch("/api/classes/select").then(function(t){return t.json()}).then(function(e){t.datas=e})},methods:{onSubmit:function(){var t=this,e="name="+this.form.name+"&cid="+this.form.cid+"&sex="+this.form.sex;fetch("/api/stu/signStu?"+e).then(function(t){return t.text()}).then(function(e){t.message="ok"==e?"添加成功":"添加失败"})}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[t._v("\n    "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"学生名称"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"所在班级"}},[n("el-select",{attrs:{placeholder:"请选择班级"},model:{value:t.form.cid,callback:function(e){t.$set(t.form,"cid",e)},expression:"form.cid"}},t._l(t.datas,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"学生性别"}},[n("el-radio-group",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[n("el-radio",{attrs:{label:2}},[t._v("保密")]),t._v(" "),n("el-radio",{attrs:{label:1}},[t._v("男")]),t._v(" "),n("el-radio",{attrs:{label:3}},[t._v("女")])],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("添加")])],1)],1)],1)},staticRenderFns:[]};var O=n("VU/8")(H,J,!1,function(t){n("n/wm")},"data-v-af447b38",null).exports,K={name:"add-sign-stu",data:function(){return{form:{name:"",cid:"",fid:"",sex:2},datas:[],message:"",fdatas:[]}},mounted:function(){var t=this;fetch("/api/classes/select").then(function(t){return t.json()}).then(function(e){t.datas=e}),fetch("/api/fangxiang/select").then(function(t){return t.json()}).then(function(e){t.fdatas=e})},methods:{onSubmit:function(){var t=this;console.log(this.form.sex);var e="name="+this.form.name+"&cid="+this.form.cid+"&fid="+this.form.fid+"&sex="+this.form.sex;fetch("/api/teach/signTe?"+e).then(function(t){return t.text()}).then(function(e){t.message="ok"==e?"添加成功":"添加失败"})}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[t._v("\n    "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"教师姓名"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"所带班级"}},[n("el-select",{attrs:{placeholder:"请选择班级"},model:{value:t.form.cid,callback:function(e){t.$set(t.form,"cid",e)},expression:"form.cid"}},t._l(t.datas,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"所带方向"}},[n("el-select",{attrs:{placeholder:"请选择方向"},model:{value:t.form.fid,callback:function(e){t.$set(t.form,"fid",e)},expression:"form.fid"}},t._l(t.fdatas,function(e){return n("el-option",{key:e.fid,attrs:{label:e.fname,value:e.fid}},[t._v(t._s(e.fname))])}))],1),t._v(" "),n("el-form-item",{attrs:{label:"教师性别"}},[n("el-radio-group",{model:{value:t.form.sex,callback:function(e){t.$set(t.form,"sex",e)},expression:"form.sex"}},[n("el-radio",{attrs:{label:2}},[t._v("保密")]),t._v(" "),n("el-radio",{attrs:{label:1}},[t._v("男")]),t._v(" "),n("el-radio",{attrs:{label:3}},[t._v("女")])],1)],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("添加")])],1)],1)],1)},staticRenderFns:[]};var X=n("VU/8")(K,N,!1,function(t){n("euhL")},"data-v-0012e41f",null).exports,Y={name:"add-more-stu",data:function(){return{fileList:[]}},methods:{handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},success:function(t){console.log(t)}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-upload",{staticClass:"upload-demo",attrs:{name:"aa",action:"/api/stu/upload","file-list":this.fileList,"on-success":this.success}},[e("el-button",{attrs:{size:"small",type:"primary"}},[this._v("点击上传")]),this._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("只能上传jpg/png文件，且不超过500kb")])],1)},staticRenderFns:[]};var B=n("VU/8")(Y,Z,!1,function(t){n("y6WA")},"data-v-9c3f80da",null).exports,G={name:"add-more-stu",data:function(){return{fileList:[]}},methods:{handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},success:function(t){console.log(t)}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-upload",{staticClass:"upload-demo",attrs:{name:"aa",action:"/api/teach/upload","file-list":this.fileList,"on-success":this.success}},[e("el-button",{attrs:{size:"small",type:"primary"}},[this._v("点击上传")]),this._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[this._v("只能上传jpg/png文件，且不超过500kb")])],1)},staticRenderFns:[]},tt=n("VU/8")(G,Q,!1,null,null,null).exports,et={name:"add-fangxiang",data:function(){return{form:{typename:""},message:""}},methods:{onSubmit:function(){var t=this;""==this.form.typename?this.message="请填写类型":fetch("/api/type/addType?typename="+this.form.typename).then(function(t){return t.text()}).then(function(e){"ok"===e?(t.$message({message:"添加成功",type:"success",duration:1e3}),t.form.typename=""):(t.$message({message:"添加失败",type:"error",duration:1e3}),t.form.typename="")})},cancel:function(){this.form.typename=""}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n\n    "+t._s(t.message)+"\n    "),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:"题目类型"}},[n("el-input",{model:{value:t.form.typename,callback:function(e){t.$set(t.form,"typename",e)},expression:"form.typename"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("添加")]),t._v(" "),n("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var at=n("VU/8")(et,nt,!1,function(t){n("YYL9")},"data-v-e06470ca",null).exports,it={name:"typeSelect",data:function(){return{typeData:""}},methods:{del:function(t){var e=this;fetch("/api/type/del?typeid="+t).then(function(t){return t.text()}).then(function(n){"ok"==n?(alert("删除成功"),e.typeData=e.typeData.filter(function(e){if(t!=e.typeid)return e})):"err"==n&&alert("删除失败")})}},mounted:function(){var t=this;fetch("/api/type/select").then(function(t){return t.json()}).then(function(e){t.typeData=e})}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table table-bordered"},[n("tbody",[t._m(0),t._v(" "),t._l(t.typeData,function(e){return n("tr",[n("td",[t._v(t._s(e.typeid))]),t._v(" "),n("td",[t._v(t._s(e.typename))]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(n){t.del(e.typeid)}}},[t._v("删除")]),t._v(" "),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/typeEdit/"+e.typeid}},[t._v("编辑")])],1)])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("tid")]),this._v(" "),e("th",[this._v("分类")]),this._v(" "),e("th",[this._v("操作")])])}]};var ot=n("VU/8")(it,st,!1,function(t){n("HFvK")},"data-v-6a4bccc6",null).exports,rt={name:"typeEdit",data:function(){return{form:{tname:""},message:""}},methods:{edit:function(){var t=this;console.log(this.form.tname);var e="tname="+this.form.tname+"&tid="+this.$route.params.tid;fetch("/api/type/edit/?"+e).then(function(t){return t.text()}).then(function(e){"ok"==e?(t.message="编辑成功",t.form.tname=""):"err"==e&&(t.message="编辑失败")})},cancel:function(){this.form.tname=""}},mounted:function(){var t=this;fetch("/api/type/editSelect?tid="+this.$route.params.tid).then(function(t){return t.json()}).then(function(e){t.form.tname=e.typename})}},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px",inline:!0}},[n("el-form-item",{attrs:{label:"类型名称"}},[n("el-input",{model:{value:t.form.tname,callback:function(e){t.$set(t.form,"tname",e)},expression:"form.tname"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.edit}},[t._v("修改")]),t._v(" "),n("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1),t._v(" "),n("div",{staticClass:"message"},[t._v(t._s(t.message))])],1)},staticRenderFns:[]};var ct=n("VU/8")(rt,lt,!1,function(t){n("epbp")},null,null).exports,ut={name:"add-test",data:function(){return{form:{fid:"",typeid:""},fangxiangDatas:[],typeDatas:[]}},mounted:function(){var t=this;fetch("/api/fangxiang/select").then(function(t){return t.json()}).then(function(e){t.fangxiangDatas=e}),fetch("/api/type/select").then(function(t){return t.json()}).then(function(e){t.typeDatas=e})},methods:{change:function(){var t="fid="+this.form.fid+"&typeid="+this.form.typeid;1==this.form.typeid?this.$router.push("/option?"+t):2==this.form.typeid?this.$router.push("/options?"+t):3==this.form.typeid&&this.$router.push("/ask?"+t)}}},ft={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",[n("el-form-item",{attrs:{label:"题目方向"}},[n("el-select",{attrs:{placeholder:"请选择方向"},model:{value:t.form.fid,callback:function(e){t.$set(t.form,"fid",e)},expression:"form.fid"}},t._l(t.fangxiangDatas,function(t){return n("el-option",{key:t.id,attrs:{label:t.fname,value:t.fid}})}))],1),t._v(" "),n("el-form-item",{attrs:{label:"题目类型"}},[n("el-select",{attrs:{placeholder:"请选择类型"},on:{change:function(e){t.change()}},model:{value:t.form.typeid,callback:function(e){t.$set(t.form,"typeid",e)},expression:"form.typeid"}},t._l(t.typeDatas,function(t){return n("el-option",{key:t.typeid,attrs:{label:t.typename,value:t.typeid}})}))],1)],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var mt=n("VU/8")(ut,ft,!1,function(t){n("HIAi")},"data-v-8605c198",null).exports,dt={name:"option1",data:function(){return{options:[],title:"",daan:"",names:"单选"}},methods:{addOption:function(){this.options.push({con:"",id:(new Date).getTime()})},del:function(t){this.options=this.options.filter(function(e){if(e.id!=t)return e})},submit:function(){var t=this,e=this.$route.query.fid,n=this.$route.query.typeid,a=this.options.map(function(t){return t.con}),i="fid="+e+"&typeid="+n+"&title="+this.title+"&daan="+this.daan+"&options="+a.join("|");fetch("/api/test/add",{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:i}).then(function(t){return t.text()}).then(function(e){"ok"==e?t.$message({message:"添加成功",type:"success"}):t.$message({message:"添加失败",type:"warning"})})}},watch:{$route:function(){1==this.$route.query.typeid?this.names="单选":this.names="多选"}}},pt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n     "+t._s(t.names)+"题目录入：\n\n    "),n("el-input",{attrs:{placeholder:"请输入题目"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("el-button",{staticStyle:{margin:"5px auto"},attrs:{type:"success"},on:{click:t.addOption}},[t._v("点击添加选项")]),t._v(" "),t._l(t.options,function(e,a){return n("el-input",{key:a,staticStyle:{margin:"5px 0"},attrs:{placeholder:"请输入选项"},model:{value:e.con,callback:function(n){t.$set(e,"con",n)},expression:"item.con"}},[n("i",{staticClass:"el-input__icon el-icon-close",attrs:{slot:"suffix"},on:{click:function(n){t.del(e.id)}},slot:"suffix"})])}),t._v(" "),n("div",{staticStyle:{margin:"5px 0"}},[t._v("\n    答案录入:\n    "),n("el-input",{attrs:{placeholder:"请输入答案"},model:{value:t.daan,callback:function(e){t.daan=e},expression:"daan"}})],1),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.submit}},[t._v("添加")])],2)},staticRenderFns:[]};var ht=n("VU/8")(dt,pt,!1,function(t){n("hgli")},"data-v-73cd7694",null).exports,vt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    多选\n")])},staticRenderFns:[]};n("VU/8")({name:"option1"},vt,!1,function(t){n("1cRM")},"data-v-ba158152",null).exports;var _t={name:"option1",data:function(){return{title:"",daan:""}},methods:{submit:function(){var t=this,e="fid="+this.$route.query.fid+"&typeid="+this.$route.query.typeid+"&title="+this.title+"&daan="+this.daan+"&options=";fetch("/api/test/add",{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:e}).then(function(t){return t.text()}).then(function(e){"ok"==e?t.$message({message:"添加成功",type:"success"}):t.$message({message:"添加失败",type:"warning"})})}}},bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",[t._v("\n    题目录入：\n\n    "),n("el-input",{attrs:{placeholder:"请输入题目"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("el-form-item",{attrs:{label:"答案"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.daan,callback:function(e){t.daan=e},expression:"daan"}})],1),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:t.submit}},[t._v("添加")])],1)],1)},staticRenderFns:[]};var gt=n("VU/8")(_t,bt,!1,function(t){n("WmCK")},"data-v-5434bec2",null).exports;n("Jmt5");a.default.use(l.a);var xt=new l.a({routes:[{path:"/",component:d,children:[{path:"",component:v},{path:"/addStu",component:b},{path:"/addFangxiang",component:y},{path:"/selectFangxiang",component:w},{path:"/editFangxiang/:fid",component:F},{path:"/addClasses",component:V},{path:"/selectClasses",component:L},{path:"/selectStu",component:I},{path:"/selectTe",component:P},{path:"/addSignTe",component:X},{path:"/addMoreTe",component:tt},{path:"/addSignStu",component:O},{path:"/addMoreStu",component:B},{path:"/addType",component:at},{path:"/typeSelect",component:ot},{path:"/typeEdit/:tid",component:ct},{path:"/addTest",component:mt,children:[{path:"/option",component:ht},{path:"/options",component:ht},{path:"/ask",component:gt}]}]},{path:"/login",component:E}]});xt.beforeEach(function(t,e,n){"/login"==t.path?n():"yes"==sessionStorage.login?n():n("/login")});var yt=xt;n("tvR6");a.default.use(s.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:yt,components:{App:r},template:"<App/>",render:function(t){return t(r)}})},NIPf:function(t,e){},WXf0:function(t,e){},WmCK:function(t,e){},YYL9:function(t,e){},epbp:function(t,e){},euhL:function(t,e){},hgli:function(t,e){},i4Tl:function(t,e){},k04J:function(t,e){},lFbC:function(t,e){},"ly/j":function(t,e){},"n/wm":function(t,e){},tvR6:function(t,e){},y6WA:function(t,e){},zRbS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dd60167508166f1fa730.js.map