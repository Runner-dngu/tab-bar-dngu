<template>
<div class="tab-bar-item " @click="itemclick">     
    <div v-if="!isActive"><slot name="icon"></slot></div> 
    <!-- 这里的的v-else是省略写法，v-else后续需要写明该表达式值 -->
    <div v-else><slot name="icon_active"></slot> </div>
    <!-- slot会被替换内容直接替换，所以使用div标签对slot进行包裹，class在div中进行动态绑定 -->
    <div :style="activeStyle"><slot name="text"></slot></div> 
</div>
</template> 

<script>
export default {
    name:'Tabbaritem',
    props:{
        path:String,
        // 定义activeColor用于动态改变字体活跃状态时的颜色
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            //判断路由对应情况
           return this.$route.path.indexOf(this.path) !==-1 
        },
        activeStyle(){
            // 判断是否处于活跃状态，true返回activeColor，false返回一个空对象
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    // 通过上述计算属性动态判断IsActive处于怎样的状态，通过boolean判断页面展示的状态
    // data:function(){
    //     return {
    //         // 'isActive':false
    //     }
    // },
    methods:{
        itemclick(){
           this.$router.replace(this.path) 
        }
    }
}
</script>

<style scoped>
.tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
   
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
  }
  
</style>