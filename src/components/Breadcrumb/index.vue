<template>
  <el-breadcrumb class="breakcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style lang="scss" scoped>
.breakcrumb {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
}
</style>
