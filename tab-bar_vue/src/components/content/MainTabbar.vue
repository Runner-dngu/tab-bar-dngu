<template>
    <div>
        <Tabbar>
      <!-- 可以在组件标签里动态传入想要改变的颜色，方式如下：activeColor="blue" -->
        <Tabbaritem path="/home">
          <!-- <tabbaritem>该标签需要注意，这是组件注册后的标签，组件名称如果是驼峰写法，需要用-进行隔开 -->
          <img src="../../assets/img/tabbar/index.svg" alt="" slot="icon">
           <!-- 活跃状态/被点击后的图标及字体状态 -->
           <img src="../../assets/img/tabbar/index1.svg" alt="" slot="icon_active">
            <div slot="text">首页</div>
        </Tabbaritem>
        <Tabbaritem path="/cantory">
          <img src="../../assets/img/tabbar/fenlei.svg" alt="" slot="icon">
           <img src="../../assets/img/tabbar/fenlei1.svg" alt="" slot="icon_active">
            <div slot="text">分类</div>
        </Tabbaritem>
        <Tabbaritem path="car">
          <img src="../../assets/img/tabbar/shopcar.svg" alt="" slot="icon">
           <img src="../../assets/img/tabbar/shopcar1.svg" alt="" slot="icon_active">
            <div slot="text">购物车</div>
        </Tabbaritem>
        <Tabbaritem path="profile">
          <img src="../../assets/img/tabbar/my.svg" alt="" slot="icon">
           <img src="../../assets/img/tabbar/my1.svg" alt="" slot="icon_active">
            <div slot="text">我的</div>
        </Tabbaritem>
    </Tabbar>
    </div>
</template>

<script>
import Tabbar from '../Tab-bar/Tabbar.vue'
import Tabbaritem from '../Tab-bar/Tabbaritem.vue'
export default {
    components:{
         Tabbar,
    Tabbaritem
    }
}
</script>