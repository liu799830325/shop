<template>
  <div class="login2_content">
    <div class="login2_box">
      <el-form
        label-width="80px"
        class="login2_form"
        :model="login2form"
        :rules="login2rules"
        ref="login2refForm"
      >
        <el-form-item label="用户名" class="item" prop="name">
          <el-input class="input" v-model="login2form.name" ></el-input>
        </el-form-item>
        <el-form-item label="密码" class="item" prop="password">
          <el-input class="input" v-model="login2form.password" type="text"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm" class="login2_btn">立即登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单的数据绑定
      login2form: {
        name: "",
        password: ""
      },
      //表单的验证规则
      login2rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10个字符", trigger: "blur" }
        ]
      }
    };
  },
  created(){
    this.getRouterData()
  },
  methods: {
    getRouterData(){
      this.name=this.$route.params.name
      this.password=this.$route.params.password
    },
    submitForm:function() {
      var flag=false;
      this.$refs.login2refForm.validate(async valid => {
        if (valid) {
          if(this.login2form.name==this.$route.params.name&& this.login2form.password==this.$route.params.password){
            flag=true;
            return this.$message.success("登录成功");
            
            // this.$router.push("/NextMain");
            // this.$router.push("/nextmain");
            // const {data:res}=await this.$http.post("login2",this.login2form.name);
            // console.log(res);
            // window.sessionStorage.setItem("token",res.data.token);
            
            // alert('登录成功');
          }else{
            // alert('请输入正确的用户名和密码');
           this.$message.error("请输入正确的用户名和密码");
          // this.$message.warning("抱歉，你输入的格式不正确，请看清提示后在输入");
          }
          // alert('登录成功');
          // console.log(this.login2form.password);
          // const result = await this.$http.post('login',this.login2form)
          // console.log(login2form.name)
          // console.log(password)
        } else {
          // alert("请输入正确的格式!!!");
          this.$message.warning("抱歉，你输入的格式不正确，请看清提示后在输入");
          return false;
        }
      });
      if(flag){
        this.$router.push("/nextmain");
      }
      
    }
  }
};
</script>

<style scoped>
.login2_content {
  background-color: #2b4b6b;
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
.login2_box {
  width: 350px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
}
.login2_form {
  position: absolute;
  top: 30px;
}
.item {
  /* position: absolute; */
  margin-left: 30px;
  margin-bottom: 50px;
}
.input {
  width: 150px;
}
.login2_btn {
  /* position: absolute; */
  margin-top: 350px;
  margin-left: 118px;
}
</style>