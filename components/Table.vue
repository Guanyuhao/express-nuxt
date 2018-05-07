  <template>
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    stripe>
        <el-table-column v-for="(item, index) in tableCounm" 
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align='center'
        :class-name='index==3&&isFee ? "c808080":""'>
        </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
            isFee:true,
            tableCounm:[
                {
                    prop:'blockNum',
                    width:'',
                    label:'快高度'
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
                    label:'奖励'
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
      methods: {
        rowClick(row, event, column) {

        },
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 == 0) {
                // return 'odd-row';
            } else {
                return 'even-row';
            }
            return '';
        }
      }
    }
  </script>


  <style lang="scss">
  /* .el-table .odd-row {
    background: #ffffff;
  } */
  .el-table {
    thead {
        color: #333333;
    }
    .c808080 {
      color: #808080
    }
    .el-table__header th{
        background: #f3f3f4;
    }
  }
  .el-table td, .el-table th.is-leaf{
        border-bottom: none;
   }
  .el-table .even-row {
    background: #f5f7f9;
  }
  .el-table::before{
      height: 0;
  }
  .el-table__row :hover{
      cursor: pointer;
  }
  </style>
  