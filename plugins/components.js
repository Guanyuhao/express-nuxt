import Vue from 'vue'
import etfHeader from '../components/Header.vue'


const components = { etfHeader, }

Object.keys(components).forEach(key => {
  
  Vue.component(key, components[key])
  
})
