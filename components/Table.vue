  <template>
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    stripe>
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
            tableCounm:[
                {
                    prop:'data',
                    width:'180',
                    label:'日期'
                },
                {
                    prop:'data',
                    width:'180',
                    label:'姓名'
                },
                {
                    prop:'data',
                    width:'180',
                    label:'地址'
                }
            ],
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, 
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, 
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, 
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
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

  <style>
  /* .el-table .odd-row {
    background: #ffffff;
  } */
  .el-table .el-table__header th{
      background: #f3f3f4;
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
  