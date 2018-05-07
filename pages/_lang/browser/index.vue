<template>
  <div class="home">

     <div class="banner">

     </div>
     <div class="table">
       <broTable />
     </div>
  </div>
</template>

<script>


import broTable from '~/components/Table.vue'
export default {
  components: {
    broTable
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  beforeRouteEnter(to, from, next) {
     next(vm => {

    })
  }
}
</script>
<style lang="scss" scoped>
    
</style>


