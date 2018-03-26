<template>
  <div class="app-wrapper" :class="{hideSidebar: isSidebarCollapse}">
    <sidebar :isCollapse="isSidebarCollapse" class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar @toggleSidebarCollapse="toggleSidebarCollapse"></navbar>
      <tags-view></tags-view>
      <app-main class="app-container"></app-main>
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, Navbar, TagsView } from './components/index.js'

export default {
  name: 'layout',
  data() {
    return {
      isSidebarCollapse: false // 控制侧边栏的折叠
    }
  },
  methods: {
    toggleSidebarCollapse() {
      let flag = this.isSidebarCollapse
      this.isSidebarCollapse = !flag
    }
  },
  components: {
    Sidebar,
    AppMain,
    Navbar,
    TagsView
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
