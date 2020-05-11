<template>

<div class="big">
    <div class="top">
            入职日期:
            <input type="text" v-model="date">
             工号:<input type="text" v-model="id" v-on:keyup.enter="add">
            姓名:<input type="text" v-model="name" v-on:keyup.enter="add">
            职位：<input type="text" v-model="job" v-on:keyup.enter="add">
            <!-- 电话:<input type="text" v-model="tell" v-on:keyup.enter="add"> -->
            <input type="button" round class="anniu" value="添加" v-on:click="add()" >
           <!-- 搜索的关键字:
           <input type="text" v-model="keywords" id="search" v-focus v-color="'yellow'"> -->
        
        </div>
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    
    <el-table-column
      label="入职日期"
      prop="date" >
    </el-table-column>
    <el-table-column
      label="工号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    <el-table-column
      label="职位"
      prop="job">
    </el-table-column>
     <!-- <el-table-column
      label="电话"
      prop="tell">
    </el-table-column> -->
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
        id:'',
        // tell:'',
        tableData: [
          {
          date: '2016-05-01',
          id:'160501',
          name: '李大壮',
          job:'传菜岗',
          // tell:'42536378890'
        }, {
          date: '2016-05-02',
          id:'160502',
          name: '王小虎',
          job:'传菜岗',
          // tell:'12312345678'
        },
          
        {
          date: '2016-05-03',
          id:'160503',
          name: '王甜甜',
          job:'前厅服务',
          // tell:'25678865432'
        },
         {
          date: '2016-05-04',
          name: '关晓丽',
          id:'160504',
          job:'迎宾岗',
          // tell:'12123342378'
        },
        {
          date: '2016-07-23',
          name: '肖兔兔',
          id:'160723',
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
                this.date=this.name=this.id=this.job=''
                },
    //   handleEdit(index, row) {
    //     console.log(index, row);
    //   },
    //   handleDelete(index, row) {
    //     console.log(index, row);
    //   }
    // },
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
  background-color: yellowgreen;
}
.top{
  height: 100px;
  line-height: 100px;
  margin: auto;
}
</style>