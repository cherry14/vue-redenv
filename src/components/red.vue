<template>
  <div class="red">
    <h1>福卡迎福</h1>
    
    <div class="circle">
          <transition name="cir" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="mask" v-show="flag">
                 
                
            </div>
             
           </transition>
           <transition name="zhu" >
              <div class="picture" >
                   <img src="@/assets/zhuzhu.jpg" alt="" width="140">
              </div>
           </transition>
          <transition name="jinka">
            <div class="jinka" v-show="flag2">
                <img src="@/assets/jinka.jpg" alt="" width="150" height="220">
            </div>
          </transition>
    </div>
   
        
        
   
    <div class="card">
      <div class="card-gay card-one">发</div>
      <div class="card-gay card-two">财</div>
      <div class="card-gay card-three">中</div>
      <div class="card-gay card-four">国</div>
      <div class="card-gay card-five">年</div>
    </div>
    <div class="btn">
      <input type="button" class="red-btn" value="点击抽卡" @click="show">
    </div>
  </div>


  
</template>
<script>
export default {
  data(){
    return {
      flag:true,
      flag2:false
      

    }
  },
  created(){
    
  },
methods:{
 show(){
   this.flag=!this.flag
   this.flag2=!this.flag2
   
   
   
 },
 beforeEnter(el){
    
   el.style.transform="rotate(0) scale(1)";
   
 },
 enter(el,done){
   el.offsetWidth
   el.style.transform="rotate(720deg) scale(3.5)";
   el.style.transition="all 1s ease-in";
   el.style.opacity="0"
    done()
 },
 afterEnter(el){
   el.style.opacity="0.6"
   el.style.transtion="all 1s ease";
   this.show()
   
  
 }
}
}
</script>


<style lang="scss" scoped>

.red{
  background-color: rgb(161, 7, 7);
  border:3px solid #ff0;
  width:100%;
  height:650px;
  text-align: center;
  overflow: hidden;
  h1{
    margin: 40px;
    color:rgb(255, 38, 0);
  }
  

  .circle{
    width:100px;
    height: 100px;
    border:3px dashed rgb(182, 171, 20);
    border-radius:50%;
    margin:100px auto;
    position: relative;
    .mask{
     width:100px;
     height:100px;
     background-color:#ff0;
     border-radius:50%;
     margin:0px auto;
     }
     .picture{
      width:100px;
      height:100px;
      border-radius:50%;
      margin:0px auto;
      z-index:999;
      position: absolute;
      top: 0;left: 0px;
      overflow: hidden;
     }
     .jinka-enter-active,
     .jinka-leave-active{
       transform: rotateY(720deg);
       opacity: 1;
     }
     .jinka-enter,
     .jinka-leave-to{
       transition:"all 1s ease";
       opacity: 0;
     }
     .jinka{
       z-index:9999;
       position: absolute;
      top: -61px;
      left: -27px;
     }




  
  }
  .card{
    display: flex;
  
    .card-gay{
      width:60px;
      height: 80px;
      margin: 0 10px;
      border:1px dotted #ff0;
      background-color: rgb(180, 170, 170);
      border-radius:5%;
      justify-content: space-around;
      font-size:38px;
      line-height: 80px;
      text-align: center;
      color:rgb(119, 113, 113);
      

    }
  }
  .red-btn {
    width: 200px;
    height: 30px;
    color:#ff0;
    text-align: center;
    
    background-color: red;
    border:2px solid rgb(219, 175, 81);
    margin-top: 30px;
  }
 
  

}


</style>


