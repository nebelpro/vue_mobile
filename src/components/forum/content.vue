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
                  <div class="item-after">全部{{ noteCount }}</div>
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
import store from '../store/index_store.js'

export default {
  props: ['notes','categories'],
  data () {
  	return {
      count: ''
  	}
  },
  computed: {
    note_arr() {
	  var arr = [];
	  for (var i in this.notes) {
		if (this.notes.hasOwnProperty(i)) {
			arr.push(this.notes[i]);
		}
	  }
	  arr.sort(function(a, b) {
		return new Date(b.date.replace(/\s/ig,'T')) - new Date(a.date.replace(/\s/ig,'T'))
	  });
	  return arr;
	} 
}
</script>
