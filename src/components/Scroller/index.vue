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
        handleToScroll
    }
    mounted(){
           var scroll= new BScroll(this.$refs.wrapper,{//进行scroll配置
            tap:true,//开启tap事件
            probeType:1//上拉刷新，截流
          });
    }
}
</script>
<style scoped>
.wrapper{height:100%;}
</style>


