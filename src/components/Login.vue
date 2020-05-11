<template>
  <div class="login">
    <form action="register.php">
      <h2 class="header1">用户注册</h2>
      <ul>
        <li>
          <span class="user">用户名</span>
          <input type="text" placeholder="请输入用户名" class="text" name="username"/>
          <div class="tips">请输入用户名</div>
        </li>
        <li>
          <span class="user">邮箱</span>
          <input type="text" placeholder="请输入邮箱" class="text" name="email"/>
          <div class="tips">请再次输入邮箱</div>
        </li>
        <li>
          <span class="user">昵称</span>
          <input type="text" placeholder="请输入昵称" class="text" name="nicheng"/>
          <div class="tips">请再次输入你的昵称</div>
        </li>

        <li>
          <span class="user">密码</span>
          <input type="text" placeholder="请输入密码" class="text" name="password"/>
          <div class="tips">请输入密码</div>
        </li>
        <li>
          <span class="user">确认密码</span>
          <input type="text" placeholder="请再次输入密码" class="text" name="pwd"/>
          <div class="tips">请再次输入密码</div>
        </li>
      </ul>
      <button @click="go" name="submit">注册</button>
    </form>
    <div class="big">
      <!-- <router-view></router-view> -->
      <div class="nav-buttom">
        <router-link to="/login">
          <!-- <i class="el-icon-s-home"></i> -->
          <label>注册</label>
        </router-link>
        <router-link to="/login2">
          <!-- <i class="el-icon-search"></i> -->
          <label class="denglu">登录</label>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "发现"
    };
  },
  methods: {
    go: function() {
      this.$router.push("/login2");
    }
  }
};
</script>
<style scoped>
.login {
  width: 400px;
  height: 500px;
  margin: 10px auto;
  box-shadow: crimson 0px 0px 5px 1px;
  position: relative;
}
.header1 {
  text-align: center;
  margin-top: 20px;
  /* position:absolute; */
}
.user {
  float: left;
  width: 90px;
  line-height: 20px;
  text-align: right;
  padding-right: 5px;
}
.login ul {
  /* margin-top: 50px; */
  /* padding-top: 30px; */
  float: left;
}
.login ul li {
  list-style: none;
  float: left;
  position: relative;
  margin-bottom: 30px;
}
.login ul li input {
  width: 200px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  float: left;
}
.login ul li input:focus + div.tips {
  opacity: 0.5;
  display: block;
}
.tips {
  position: absolute;
  left: 400px;
  right: 0px;
  padding: 8px;
  background-color: darkorchid;
  color: gainsboro;
  width: 180px;

  display: none;
}
div.tips:before {
  position: absolute;
  left: -10px;
  margin-top: -10px;

  top: 50%;
  content: "";
  width: 0px;
  height: 0px;
  border: 10px solid transparent;
  border-right-color: green;
  border-left: none;
}
.text {
  color: gray;
  padding: 0px 10px;
}

button {
  background: snow;
  color: red;
}

.nav-buttom {
  margin-top: 33px;
  height: 50px;
  position: absolute;
  /* bottom: 0; */
  /* background: darkgrey; */
  /* border-top:1px solid #f4f4f4; */
  /* padding-top: 5px; */
  width: 400px;
  /* line-height: 50px; */
  font-size: 18px;
  /* margin-left: px; */
}
.nav-buttom > a {
  dipslay: inline-block;
  width: 50%;
  height: 100%;
  float: left;
  text-decoration: none;
  background-color: chartreuse;
  /* margin-left: 20px; */
}

/* .nav-buttom i{
    display: block;
    font-size: 26px;
} */
a:active {
  /* background-color:red; */
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  /* font-size: 15px; */
}
.denglu {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: chocolate;
}
</style>