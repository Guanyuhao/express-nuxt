<template>
  <header>
    <div class="wrapPc">
        <el-row>
            <el-col :span="4">
                logo
            </el-col>
            <el-col :span="8">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                    <el-menu-item v-for="(item,index) in navRouter" :key="index" :index="item.path">
                        {{item.text}}
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="8">
                <el-input placeholder="Search By Address / Txhash / Block / Token" v-model="searchText" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
                <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/zh` + $route.fullPath" active-class="none" exact>
                    {{ $t('links.chinese') }}
                </nuxt-link>
                <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
                    {{ $t('links.english') }}
                </nuxt-link>
            </el-col>
        </el-row>
    </div>
    
  </header>
</template>

<script>
export default {
    name: 'browserHeader',
    async asyncData({ store, route, error }) {
      
    },
    props: {
        navRouter: Array,
        
    },
    data() {
        return {
            activeIndex:'/browser',
            searchText:''
        }
    },
    created(){
        if(this.$route.path){
            this.activeIndex = this.$route.path
        }
        
    },
    methods: {
        handleSelect() {

        }
    }
}
</script>
