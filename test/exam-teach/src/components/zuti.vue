<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">组题</h1>
            <a class="mui-icon mui-icon-checkmarkempty mui-pull-right" @click.prevent="save(type)"></a>
        </header>

        <div class="mui-content">
            <div v-show="type==1||type==2">
                <div class="box" v-for="(item,key) in datas">
                    <div class="title">
                         题目： {{item.title}}
                    </div>
                    <div class="opts">
                        选项:
                        <div v-for="(opt,optkey) in item.options">
                            {{optkey}}. {{opt}}
                        </div>

                    </div>


                  <div class="score-box">
                    <div class="mui-input-row mui-radio mui-left left" v-for="(s,skey) in scoreOpt">
                        <label :for="'a'+key+skey">{{s}}分</label>
                        <input :name="key" type="radio" :id="'a'+key+skey" v-model="item.info" :value="item.id+':'+s" @change="change">
                    </div>

                    <span class="left" style="padding-top:10px;" @click="clear(item)">清除</span>

                  </div>
                  <div class="line"> </div>
                </div>


            </div>




            <div v-if="type==3">
                  <div class="box"v-for="(item,key) in datas">
                      <div class="title">
                          题目： {{item.title}}
                      </div>
                      <div>
                          答案:
                          <div>
                                {{item.daan}}
                          </div>
                      </div>

                      <div class="score-box">
                          <div class="mui-input-row mui-radio mui-left left" v-for="(s,skey) in scoreOpt">
                              <label :for="'a'+key+skey">{{s}}分</label>
                              <input :name="key" type="radio" :id="'a'+key+skey" v-model="item.info" :value="item.id+':'+s" @change="change">
                          </div>

                          <span class="left" style="padding-top:10px;" @click="clear(item)">清除</span>

                      </div>
                      <div class="line"> </div>
                  </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "zuti",
        methods:{

            back(){
                this.$router.go(-1);
            },
            change(){
//                console.log(this.datas);
            },
            clear(item){
                item.info="";
//                console.log(this.datas);
            },
            save(type){

                var infos=this.datas.map(function (item) {
                    if(item.info){
                        return item.info
                    }
                })

               infos= infos.filter(function (item) {
                    if(item){
                        return item
                    }
                })

                if(type==1){
                    this.$store.commit("setRadioInfo",infos)
                }else if(type==2){
                    this.$store.commit("setCheckInfo",infos)
                }else if(type==3){
                    this.$store.commit("setJiandaInfo",infos)
                }
            }
        },

        data(){
            return {
                datas:[],
                scoreOpt:[1,2,3,4,5]
            }
        },
        computed:{
          type(){
              return this.$store.state.tid;
          }
        },
        mounted(){
            var fid=this.$store.state.fid;
            var tid=this.$store.state.tid;
            var params="fid="+fid+"&tid="+tid;

            var livedata="";

            if(this.type==1){
                livedata=this.$store.state.radioInfo;
            }else if(this.type==2){
                livedata=this.$store.state.checkInfo;

            }else{
                livedata=this.$store.state.jiandaInfo;
            }


            fetch("/api/teachtest/select?"+params).then(function (e) {
                return e.json();
            }).then((e)=>{

                e.forEach(function (item) {
                    item.options=item.options.split("|");
                    item.info=""
                    livedata.forEach(function (item1) {
                        var arr=item1.split(":");
                        if(item.id==arr[0]){
                            item.info=arr[0]+":"+arr[1];
                        }
                    })
                })

                this.datas=e;


            })
        }
    }
</script>

<style scoped>
 .box{
     padding: 10px;
     font-size: 18px;
     overflow: hidden;
 }
    .title{
        font-weight: bold;
    }
    .left{
        float:left;
        clear:none
    }
    .line{
        width:95%;height:2px;
        background: rgba(200,200,200,.6);
        clear:both;
        margin:auto;
        margin-too:5px;
    }
</style>