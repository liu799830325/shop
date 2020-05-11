<template>

<div class="big">
    <div class="top">
            日期:
            <input type="text" v-model="date">
            姓名:<input type="text" v-model="name" v-on:keyup.enter="add">
            工时：<input type="text" v-model="time" v-on:keyup.enter="add">
            <input type="button" round class="anniu" value="添加" v-on:click="add()" >
        
        </div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    
    <el-table-column
      label="日期"
      prop="date" >
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="工时"
      prop="time">
    </el-table-column>
    
    <el-table-column
      align="right">
      <template slot="header" >
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
          
        <!-- <el-button
          size="mini"
           @click.native.prevent="deleteRow(scope.$index, tableData)">Edit</el-button> -->
        <el-button
          size="mini"
          type="danger"
           @click.native.prevent="deleteRow(scope.$index, tableData)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        date:'',
        name:'',
        time:'',
        // tell:'',
        tableData: [
          {
          date: '2019-12-01',
          name: '王酷盖',
          time:'2h',
        }, {
          date: '2019-12-13',
          name: '张晓胖',
           time:'2h',
        },
          
        {
          date: '2019-12-21',
          name: '李飞',
          time:'2h',
        },
        
       ],
        search: ''
      }
    },
    methods: {
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      add:function() {
                this.tableData.push({date:this.date,name:this.name,time:this.time})
                this.date=this.name=this.time=this.job=''
                },
    
    }
  }
</script>
<style scoped>
.anniu{
  margin-left: 20px;
}
.el-table-column{
  color: black;
  font-weight: 700;
}
.big{
    background-color:violet;
}
.top{
  height: 100px;
  line-height: 100px;
  margin: auto;
}
</style>