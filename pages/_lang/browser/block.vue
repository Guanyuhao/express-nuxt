<template>
  <div class="browser-block">
block
<el-input v-model="symbol" placeholder="btcusdt"></el-input>
<el-input v-model="type" placeholder="step0"></el-input>

    <div class="wrapPc">
       <div class="home_tabel">
          
          <broTable :tableCounm='tableCounm' :tableData='tableData' />
          <div style="width:20px;"></div>
          <broTable :tableCounm='tableCounm' :tableData='tableData1' />
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
    data() {
      return {
        tableCounm:[
          {
            prop:'id',
            width:'60',
            label:'',
          },
          {
            prop:'price',
            width:'',
            label:'价格'
          },
          {
            prop:'amount',
            width:'',
            label:'数量'
          },
          {
            prop:'sum',
            width:'',
            label:'累计',
           
          }
        ],
        tableData: [
          {
            id: '1',
            price: +new Date(),
            amount: 123,
            sum: '123ETH'
          }, 
        ],
        tableData1: [
          {
            id: '1',
            price: +new Date(),
            amount: 123,
            sum: '123ETH'
          }, 
        ],
        symbol:'btcusdt',
        type:'step0',
        isReturnDepth:true,
      }
    },
    created() {
      
      this.init()
    },
    methods: {

      init() {

        this.getDepth()
        clearInterval(this.$store.state.depthTimer)
        this.$store.state.depthTimer = null
        if(!this.$store.state.depthTimer){
          this.$store.state.depthTimer = true
           this.depthTimer = setInterval(()=>{
            this.getDepth()
        },5000)
        }
       

      },
      getDepth(symbol,type,num) {


        if(!this.isReturnDepth){
          return false
        }

        this.isReturnDepth = false

        this.$store.dispatch('HUBI_DEPTH',this.symbol,this.type).then(data=>{
            let tick = data.data.tick
                ,asks
                ,bids
                ,askSum = 0
                ,bidSum = 0
            asks = tick.asks
            bids = tick.bids

            this.tableData = asks.map((element,index,arr)=>{
              let price,amount,sum
              price = element[0]
              amount = element[1]
              if(index == 0){
                askSum = amount
              }else{
                askSum = askSum + asks[index-1][1]
              }
              sum = askSum
              return {
                id:index,
                price,
                amount,
                sum
              }
            })

            this.tableData1 = bids.map((element,index,arr)=>{
              let price,amount,sum
              price = element[0]
              amount = element[1]
              if(index == 0){
                bidSum = amount
              }else{
                bidSum = bidSum + bids[index-1][1]
              }
              sum = bidSum
              return {
                id:index,
                price,
                amount,
                sum
              }
            })
            this.isReturnDepth = true
        })
        .catch(()=>{
            this.isReturnDepth = true          
        })
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  .browser-block{
    background: #f5f5f5;
    .home_tabel{
    //  overflow: hidden; 
     display: flex;
     flex-direction: row;
    }
  }
</style>