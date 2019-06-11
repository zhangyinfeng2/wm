<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>

import BScroll from 'better-scroll'

export default {
    name:'Srcoller',
    props:{
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted(){
           var scroll= new BScroll(this.$refs.wrapper,{//进行scroll配置
            tap:true,//开启tap事件
            probeType:1//上拉刷新，截流
          });
          this.scroll = scroll;
          scroll.on('scroll',(pos)=>{
              this.handleToScroll(pos)
          });
          scroll.on('touchEnd',(pos)=>{
              this.handleToTouchEnd(pos)
          })
    },
    methods:{
        toScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>
<style scoped>
.wrapper{height:100%;}
</style>


