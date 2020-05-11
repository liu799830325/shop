<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称1" class="list">
            <span>{{ props.row.name1 }}</span>
          </el-form-item>
          <el-form-item label="商品名称2" class="list">
            <span>{{ props.row.name2 }}</span>
            
            
          </el-form-item>
          <el-form-item label="商品名称3" class="list">
            <span>{{ props.row.name3 }}</span>
          </el-form-item>
          <el-form-item label="商品名称4" class="list">
            <span>{{ props.row.name4 }}</span>
          </el-form-item>
          <el-form-item label="商品名称5" class="list">
            <span>{{ props.row.name5 }}</span>
          </el-form-item>
          <el-form-item label="商品名称6" class="list">
            <span>{{ props.row.name6 }}</span>
          </el-form-item>
          <el-form-item label="商品名称7" class="list">
            <span>{{ props.row.name7 }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="下单时间"
      prop="time">
    </el-table-column>
    <el-table-column
      label="下单编号"
      prop="bianhao">
    </el-table-column>
    
 <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="danger"
          size="small">
          已完成,可移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
       methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          time: '2020-02-02-12-23-32',
          bianhao:'12121121',
          name1: '好滋好味鸡蛋仔',
          name2: '宫保鸡丁 ---*2' ,
          name3: '麻辣小龙虾',
          name4: '刀刃杏鲍菇',
          name5: '番茄炒鸡蛋',
          name6: '米饭',
          name7:'小米粥'
        }, {
         time: '2020-02-02-12-23-32',
          bianhao:'12121121',
          name1: '好滋好味鸡蛋仔',
          name2: '宫保鸡丁 ---*2' ,
          name3: '麻辣小龙虾',
          name4: '刀刃杏鲍菇',
          name5: '番茄炒鸡蛋',
          name6: '米饭',
          name7:'小米粥'
        }, {
          time: '2020-02-02-12-23-32',
           bianhao:'12121121',
           name1: '好滋好味鸡蛋仔',
          name2: '宫保鸡丁 ---*2' ,
          name3: '麻辣小龙虾',
          name4: '刀刃杏鲍菇',
          name5: '番茄炒鸡蛋',
          name6: '米饭',
          name7:'小米粥'
        }, {
          time: '2020-02-03-12-23-12',
           bianhao:'12121121',
          name1: '好滋好味鸡蛋仔',
          name2: '宫保鸡丁 ---*2' ,
          name3: '麻辣小龙虾',
          name4: '刀刃杏鲍菇',
          name5: '番茄炒鸡蛋',
          name6: '米饭',
          name7:'小米粥'
        }]
      }
    }
  }
</script>
<style scoped>
.list{
    margin-top: -10px;
}
span{
    margin-right: 100px;
}
</style>
