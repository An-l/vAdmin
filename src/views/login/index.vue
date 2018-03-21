<template>
  <div class="login-container">
    <!-- 侧边栏 -->
    <aside class="right-side">
      <h2>后台信息系统</h2>
      <div class="login-box">
        <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="isLoading" type="primary" @click="submitForm('loginForm')">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </aside>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { loginByUsername } from 'api/login'

export default {
  data() {
    return {
      isLoading: false,
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login() {
      this.isLoading = true
      let { username, password } = this.loginForm
      loginByUsername(username, password).then(res => {
        this.isLoading = false

        if (res.statusCode === 200) {
          // 登录成功
          Message({
            message: res.statusMsg,
            type: 'success',
            duration: 5 * 1000
          })

          this.$router.push({
            path: '/home'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
