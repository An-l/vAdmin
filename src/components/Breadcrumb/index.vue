<template>
  <el-breadcrumb class="breakcrumb" separator="/">
    <el-breadcrumb-item v-for="(item) in levelList" v-if="item.meta.title" :to="item.path" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      let firstMatched = matched[0]
      if (firstMatched && firstMatched.name !== 'Home') {
        matched = [{ path: '/home', meta: { title: 'Home' } }].concat(matched)
      }

      this.levelList = matched
    }
  }
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
