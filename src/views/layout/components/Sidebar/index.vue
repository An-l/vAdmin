<template>
  <div>
    <el-menu default-active="1" class="sidebar" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="rgb(64, 158, 255)">
      <router-link to="/">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>

      <router-link to="/userList/index">
        <el-menu-item index="2">
          <i class="el-icon-tickets"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </router-link>

      <router-link to="/postList/index">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
}
.sidebar:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
