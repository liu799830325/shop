<template>

<div class="big">
    <div class="top">
            开始日期:
            <input type="text" v-model="date">
            姓名:<input type="text" v-model="name" v-on:keyup.enter="add">
            职位：<input type="text" v-model="job" v-on:keyup.enter="add">
            <input type="button" round class="anniu" value="添加" v-on:click="add()" >
        
        </div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    
    <el-table-column
      label="开始日期"
      prop="date" >
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="职位"
      prop="job">
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
        job:'',
        // tell:'',
        tableData: [
          {
          date: '2019-12-01',
          id:'191201',
          name: '提美丽',
          job:'前厅服务',
          // tell:'42536378890'
        }, {
          date: '2019-12-13',
          id:'191213',
          name: '李腾宇',
          job:'店长',
          // tell:'12312345678'
        },
          
        {
          date: '2019-12-21',
          id:'191221',
          name: '汤照军',
          job:'经理',
          // tell:'25678865432'
        },
         {
          date: '2019-12-27',
          name: '余聪',
          id:'191227',
          job:'厨师',
          // tell:'12123342378'
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
                this.tableData.push({date:this.date,id:this.id,name:this.name,job:this.job})
                this.date=this.name=this.job=''
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
    background-color:lightcoral;
}
.top{
  height: 100px;
  line-height: 100px;
  margin: auto;
}
</style>