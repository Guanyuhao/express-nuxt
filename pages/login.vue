<template>
  <section class="container">
      <div class="login_form">
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
            label="用户名"
            prop="username"
            
        >
            <el-input type="username" v-model.number="numberValidateForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item
            label="密码"
            prop="password"
           
        >
            <el-input type="password" v-model.number="numberValidateForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login('numberValidateForm')">提交</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            <el-button @click="register('numberValidateForm')">注册</el-button>            
        </el-form-item>
        </el-form>
      </div>
  </section>
</template>

<script>
// import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
  },
  head () {
    return {
      title: 'login'
    }
  },
    data() {
      return {
        numberValidateForm: {
          username: 'guan',
          password:'guan'
        }
      };
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$store.dispatch('LOGIN', this.numberValidateForm).then(data => {
                    if(data.success) {
                        this.$message('登录成功')
                    } else {
                        this.$message.error('用户名或密码不正确!');         
                    }
                })
          } else {
              this.$message.error('error submit!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$store.dispatch('REGISTER', this.numberValidateForm).then(data => {
                    if(data.success) {
                        this.$message('登录成功')
                    } else {
                        this.$message.error('用户名或密码不正确!');
                                    
                    }
                })
          } else {
              this.$message.error('error submit!');
            return false;
          }
        });
      }
    }
}
</script>

<style lang="scss" scoped>
  .login_form {
    width: 400px;
    margin: 0 auto;
  }
</style>
