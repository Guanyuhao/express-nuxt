import Vue from 'vue'
// import etfHeader from '../components/Header.vue'


const components = {  }

export default ()=>{
  
  Object.keys(components).forEach(key => {
    
    Vue.component(key, components[key])
    
  })
}