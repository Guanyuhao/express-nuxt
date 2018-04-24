<template>
  <section class="container">
    
    login
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'login'
    }
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style scoped>

</style>
