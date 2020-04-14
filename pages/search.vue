<template>
  <div class="search">
    this is search page
    <ul>
      <li v-for="(item, index) of list" :key="index">{{ item }}</li>
      <li v-for="(item, index) of $store.state.city.list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'search',
  data() {
    return {
      list: []
    }
  },
  // async mounted() {
  //   const {status, data: {list}} = await axios.get('/city/list')
  //   if (status === 200) {
  //     this.list = list
  //   }
  // }

  async asyncData(context) {
    console.log(1111, context)
    const {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {list}
    }
  }
}
</script>
