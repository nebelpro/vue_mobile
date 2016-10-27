<template>
<!--每个组件最外层需要使用div包括，否则vue-router过场动画会失效-->
<div>
  <div class="card">
      <div class="card-content">
        <div class="list-block">
          <ul>
            <li>
              <a class="item-link item-content" v-link="'noteList'">
                <div class="item-inner"> 
                  <div class="item-after">全部 {{ noteCount }}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  </div>  
</div>
</template>

<script>
import store from '../../store/index_store.js'

export default { 
  data () {
  	return {
      count: '12'
  	}
  } 
}
</script>
