<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">预览 总分数{{totalScore}}</h1>
        </header>

        <div class="mui-content">
            <!--单选题-->
            <div>
                单选题:
                <div class="box" v-for="(item,key) in raidoData">
                    <div class="title">
                         题目： {{item.title}}   {{item.score}}
                    </div>
                    <div class="opts">
                        选项:
                        <div v-for="(opt,optkey) in item.options">
                            {{optkey}}. {{opt}}
                        </div>

                    </div>
                  <div class="line"> </div>
                </div>


            </div>

            <!--多选题-->
            <div>
                多选题:
                <div class="box" v-for="(item,key) in checkData">
                    <div class="title">
                        题目： {{item.title}}  {{item.score}}
                    </div>
                    <div class="opts">
                        选项:
                        <div v-for="(opt,optkey) in item.options">
                            {{optkey}}. {{opt}}
                        </div>

                    </div>
                    <div class="line"> </div>
                </div>


            </div>


            <!--简答题-->

            <div>
                简答题：
                  <div class="box"v-for="(item,key) in jiandaData">
                      <div class="title">
                          题目： {{item.title}} {{item.score}}
                      </div>
                      <div>
                          答案:
                          <div>
                                {{item.daan}}
                          </div>
                      </div>

                      <div class="line"> </div>
                  </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "preview",
        methods:{

            back(){
                this.$router.go(-1);
            }
        },

        data(){
            return {
                    raidoData:[],
                    checkData:[],
                    jiandaData:[],
                    totalScore:0
            }
        },
        mounted(){
          var tiarr=this.$store.state.radioInfo.concat(this.$store.state.checkInfo,this.$store.state.jiandaInfo);
          var tis="";
          var scores=[];

          for(var i=0;i<tiarr.length;i++){
              var arr=tiarr[i].split(":");
              tis+=arr[0]+",";
              this.totalScore+=parseInt(arr[1]);
              scores.push(arr[1])
          }


          fetch("/api/teachtest/tis?tis="+tis.slice(0,-1)).then(function (e) {
              return e.json();
          }).then((e)=>{
              for(var i=0;i<e.length;i++){
                  e[i].score=scores[i];
                  e[i].options=e[i].options.split("|")
                  if(e[i].typeid==1){
                      this.raidoData.push(e[i]);
                  }else if(e[i].typeid==2){
                      this.checkData.push(e[i]);
                  }else{
                      this.jiandaData.push(e[i]);
                  }
              }
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