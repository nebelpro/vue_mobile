


<!--vue-router根组件-->
<style>
.expand-transition {
  transition: opacity .3s ease;
  overflow: hidden;
}
.expand-enter, .expand-leave {
  height: 0;
  opacity: 0;
}
</style>
<template>
<div>
  <div class="page"> 
      
    <header> 
      <h1 class="title">Vue</h1>
    </header>
    
    <!--search-->
    <div class="bar bar-header-secondary" v-if="this.$route.path=='/noteList'">
      <div class="searchbar">
        <a class="searchbar-cancel">取消</a>
        <div class="search-input">
          <label class="icon icon-search" for="search"></label>
          <input type="search" id='search' placeholder='请输入关键字' v-model="query"/>
        </div>
      </div>
    </div>

    <div class="content">
      <!--路由外链-->
      <router-view 
      transition="expand" 
      transition-mode="out-in"
      :notes="notes"
      :categories="categories"
      :query="query"
      :select_category.sync="select_category"
      :id.sync="id"
      :title.sync="title"
      :content.sync="content"
      :category.sync="category"
      :category_name.sync="category_name"
      :category_color.sync="category_color"
      ></router-view>
    </div>
  </div> 

</div>
</template>

<script> 
import store from './store/index.js'

import forumContent from './components/forum/content.vue' 

export default {
  data () {
    return {
      categories: {},
      notes: {} 
    }
  },
  /* 组件 */
  components: {
    forumContent
  } 
}
</script>
