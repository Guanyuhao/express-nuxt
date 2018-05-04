<template>
  <header>
    <el-row>
        <el-col :span="4">
            logo
        </el-col>
        <el-col :span="16">
           
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    <nuxt-link class="Header__Link" :to="$i18n.path('')" exact>
                        {{ $t('links.home') }}
                    </nuxt-link>
                </el-menu-item>
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
            </el-menu>
                <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/zh` + $route.fullPath" active-class="none" exact>
                  {{ $t('links.chinese') }}
                </nuxt-link>
                <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
                  {{ $t('links.english') }}
                </nuxt-link>
              
            
        </el-col>
        <el-col :span="4">
            
        </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
    name: 'etf-header',
    async asyncData({ store, route, error }) {
      
    },
    data() {

    }
}
</script>
