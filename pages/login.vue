<template>
  <section class="container">
      <div class="login_form">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="username">
              <Input type="text" v-model="formInline.username" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
              <!-- <Button type="primary" @click="handleSubmit('formInline')">注册</Button> -->
              
          </FormItem>
        </Form>
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
  data () {
      return {
          formInline: {
              username: '',
              password: ''
          },
          ruleInline: {
              username: [
                  { required: true, message: 'Please fill in the user name', trigger: 'blur' }
              ],
              password: [
                  { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                  { type: 'string', min: 4, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
              ]
          }
      }
  },
  methods: {
      handleSubmit(name) {
          this.$refs[name].validate((valid) => {
              if (valid) {
                this.$store.dispatch('LOGIN', this.formInline).then(data => {
                    if(data.success) {
                        // this.$router.push('/admin/publish')
                        this.$Message.success('Success!');
                        
                    } else {
                        // this.$refs.tip.openTip('用户名或密码不正确')
                        this.$Message.error('用户名或密码不正确');                        
                            
                    }
                })
              } else {
                  this.$Message.error('Fail!');
              }
          })
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
