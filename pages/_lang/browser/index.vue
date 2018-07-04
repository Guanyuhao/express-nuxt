<template>
  <div class="browser_home">

     <div class="banner">

     </div>
     <div class="wrapPc">
       <div class="home_tabel">
          <!-- <broTable style="width:calc(50% - 10px );float:left;"/>
          <div style="width:20px;float:left;"></div>
          <broTable style="width:calc(50% - 10px );float:left;" /> -->
          <broTable :tableCounm='tableCounm' :tableData='tableData' />
          <div style="width:20px;"></div>
          <broTable :tableCounm='tableCounm' :tableData='tableData' />
       </div>
     </div>
  </div>
</template>

<script>


import broTable from '~/components/Table.vue'
export default {
  components: {
    broTable
  },
  async asyncData ({ store, route }) {
    
    
  },
  data() {
    return {
      tableCounm:[
        {
          prop:'blockNum',
          width:'',
          label:'快高度',
          className:'c00b4ff'
        },
        {
          prop:'time',
          width:'',
          label:'时间戳'
        },
        {
          prop:'tradnum',
          width:'',
          label:'交易数'
        },
        {
          prop:'currency',
          width:'',
          label:'奖励',
          className:'c808080',
        }
      ],
      tableData: [
        {
          blockNum: '45156',
          time: +new Date(),
          tradnum: 123,
          currency: '123ETH'
        }, 
        {
          blockNum: '45156',
          time: +new Date(),
          tradnum: 123,
          currency: '123ETH'
        }, 
        {
          blockNum: '45156',
          time: +new Date(),
          tradnum: 123,
          currency: '123ETH'
        }, 
      ]
    }
  },
  created() {
  // const data  =  this.$store.dispatch('BLOK_LIST')
    // let data  = this.$store.dispatch('HUBI_DEPTH')

  },
  methods: {
    init() {
      
    },
    
  },
  beforeRouteEnter(to, from, next) {
     next(vm => {

    })
  }
}
</script>
<style lang="scss" scoped>
  .browser_home{
    background: #f5f5f5;
    .home_tabel{
    //  overflow: hidden; 
     display: flex;
     flex-direction: row;
    }
  }
</style>


