<template>
  <div class="default">
    <el-container>

      <el-header height='30px'>

        <MyTop />

      </el-header>

      <el-main> 
          <header class="Header">
            <div class="container">
              <h1 class="Header__Title">Nuxt i18n</h1>
              <nav class="Header__Menu">
                <nuxt-link class="Header__Link" :to="$i18n.path('')" exact>
                  {{ $t('links.home') }}
                </nuxt-link>
                <nuxt-link class="Header__Link" :to="$i18n.path('about')" exact>
                  {{ $t('links.about') }}
                </nuxt-link>
                <nuxt-link class="Header__Link" :to="$i18n.path('browser')" exact>
                  browser
                </nuxt-link>
                <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/zh` + $route.fullPath" active-class="none" exact>
                  {{ $t('links.french') }}
                </nuxt-link>
                <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
                  {{ $t('links.english') }}
                </nuxt-link>
              </nav>
            </div>
          </header>
        <nuxt/>

      </el-main>

      <el-footer>

        <MyFooter />

      </el-footer>
      
    </el-container>
  </div>
</template>

<script>

import MyTop from '~/components/Top.vue'

import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyTop, MyFooter
  }
}
</script>

<style>


.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
