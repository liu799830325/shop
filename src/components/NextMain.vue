<template>
  <!-- <div> -->
  <el-container>
    <!-- 头部区 -->
    <el-header>餐厅后台管理系统</el-header>
    <el-container>
      <!-- 中心区 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="green"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            
            <template slot="title">
              <i class="el-icon-location"></i>
              <span> 用户管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <router-link to="/usesma"><el-menu-item index="1-1"><i class="el-icon-menu">
                </i>正式员工</el-menu-item></router-link>
              <!-- <el-menu-item index="1-1"><i class="el-icon-menu"></i>用户列表</el-menu-item> -->
              <router-link  to="/shixi"><el-menu-item index="1-2"><i class="el-icon-menu">
                </i>实习员工</el-menu-item></router-link>
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2"> -->
            <router-link  to="/jianzhi"><el-menu-item index="1-3"><i class="el-icon-menu">
              </i>兼职员工</el-menu-item></router-link>
            <!-- <el-menu-item index="1-4"><i class="el-icon-menu"></i>选项4</el-menu-item> -->
            <!-- </el-menu-item-group> -->
            <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item> -->
            <!-- </el-submenu> -->
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>进货管理</span>
            </template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>进货列表</el-menu-item>
            <!-- <el-menu-item index="2-2"><i class="el-icon-menu"></i>酒水饮料</el-menu-item> -->
          </el-submenu>


        <router-link  to="/caipin"><el-menu-item index="3"><i class="el-icon-location">
              </i><span>菜品管理</span></el-menu-item></router-link>
<!-- 
         <el-menu-item index="4">
            <i class="el-icon-location"></i>
            <span slot="title">订单管理</span>
            
          </el-menu-item> -->
          <!-- <el-submenu index="4"> -->
            <!-- <i class="el-icon-location"></i>订单管理 -->
            <router-link  to="/order"><el-menu-item index="4"><i class="el-icon-location">
              </i><span>订单管理</span></el-menu-item></router-link>
           <!-- </el-submenu> -->
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
      
    </el-container>
  </el-container>
  <!-- <el-button type="primary" @click="goback">退回</el-button> -->
  <!-- </div> -->
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-header {
  background-color: rgb(212, 30, 39);
  color: rgb(214, 202, 202);
  text-align: center;
  line-height: 60px;
  font-weight: 700;
  font-size: 25px;
}

.el-aside {
  background-color:darkgrey;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
span{
  font-size: 18px;
  font-weight: 700;
}
router-link{
  text-decoration: none;
}
</style>
