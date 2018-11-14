

<template>
  <div class="browser">
     <broTop :navRouter='navRouter'  v-if="navRouter"/>
      <nuxt-child/>
  </div>
</template>

<script>

import broTop from '~/components/Header.vue'

export default {
  components: {
    broTop
  },
  data () {
    return {
      navRouter: [
        {
          path: '/browser',
          text: this.$t('browser.home')
        },
        {
          path: '/browser/block',
          text: this.$t('browser.block')
        },
        {
          path: '/browser/transaction',
          text: this.$t('browser.transaction')
        },
        {
          path: '/browser/token',
          text: this.$t('browser.token')
        }
      ]
    }
  },
  created () {

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.locale !== 'en') {
        vm.navRouter = vm.navRouter.map(item => {
          item.path = '/' + vm.$store.state.locale + item.path
          return item
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
    
</style>


