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
        :class-name='item.className?item.className:""'>
        </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      props:{
        tableCounm: Array,
        tableData: Array
      },
      data() {
        return {
          
        }
      },
      created() {
          
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
      color: #808080;
    }
    .el-table__row {
        .c00b4ff{
            color: #00b4ff;
        }
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
  