<template>
  <div id="register">
    <el-form
      action="register_check.php"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name ">
        <el-input v-model="ruleForm.name" name="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" name="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" name="pwd"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <button class="btn_reg" @click="go" > 我有账号，直接登录</button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkName= (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$router.push({name:`login2`,params:{name:'刘瑞丹',password:'111111'}});
          alert()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
     
    },
    go:function(){
        this.$router.push("/Login2");
      },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
#register {
  width: 450px;
  margin: 80px auto;
  height: 50px;
  height: 500px;
  border: blueviolet 1px solid;
  box-shadow: crimson 0px 0px 5px 1px;
  padding-right: 30px;
}
.el-form-item {
  margin-top: 50px;
}
.btn_reg{
  float: right;
}
</style>
