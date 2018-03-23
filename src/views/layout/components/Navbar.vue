<template>
  <div class="navbar">
    <hamburger :toggleClick="toggleClick" :isActive="isHamburgerActive" class="hamburger-container"></hamburger>
    <breadcrumb></breadcrumb>
    <el-dropdown class="avator-container" trigger="click">
      <img class="user-avator" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="头像">
      <i class="el-icon-caret-bottom"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Breadcrumb from 'components/Breadcrumb'
import Hamburger from 'components/Hamburger'

export default {
  name: 'Navbar',
  data() {
    return {
      isHamburgerActive: false
    }
  },
  methods: {
    toggleClick() {
      this.isHamburgerActive = !this.isHamburgerActive
      this.$emit('toggleSidebarCollapse')
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #eee;
  .hamburger-container {
    float: left;
    padding: 0 10px;
    height: 50px;
    line-height: 58px;
    outline: none;
  }
  .avator-container {
    position: absolute;
    top: 0;
    right: 15px;
    height: 40px;

    .user-avator {
      margin-top: 5px;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      cursor: pointer;
    }
  }
}
</style>
