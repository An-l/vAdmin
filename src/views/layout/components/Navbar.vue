<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger :toggleClick="toggleClick" :isActive="isHamburgerActive" class="hamburger-container"></hamburger>
    <breadcrumb></breadcrumb>
  </el-menu>
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
.hamburger-container {
  float: left;
  padding: 0 10px;
  height: 50px;
  line-height: 58px;
  outline: none;
}
</style>
