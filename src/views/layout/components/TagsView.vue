<template>
  <div class="tags-view-container">
    <div class="tag" :class="{'active': isActive(tag)}" v-for="(tag, index) in viewTagsList" :key="index">
      <router-link :to="tag.path">
        {{tag.meta.title}}
      </router-link>
      <i @click="handleClose(index)" class="el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsView',
  data() {
    return {
      viewTagsList: []
    }
  },
  watch: {
    $route() {
      console.log(this.$route)
      this.addViewTags()
    }
  },
  methods: {
    addViewTags() {
      const route = this.$route
      let isExist = false
      this.viewTagsList.forEach(item => {
        if (item.path === route.path) {
          isExist = true
        }
      })
      // 1.如果该标签未存在，则添加
      if (!isExist) {
        this.viewTagsList.push(route)
      }
    },
    handleClose(index) {
      let len = this.viewTagsList.length
      let item = this.viewTagsList[index]
      this.viewTagsList.splice(index, 1)
      if (item.path !== this.$route.path) {
        return
      }

      if (index < len - 1) {
        // 1.如果该标签后面还有其他标签，则跳转到后一个标签
        this.$router.push({
          path: this.viewTagsList[index].path
        })
      } else if (index === 0) {
        // 2.如果该标签为最后一个标签，跳转到首页
        this.$router.push({
          path: '/home'
        })
      } else {
        // 3.如果该标签后面为空，则跳转到前一个标签
        this.$router.push({
          path: this.viewTagsList[index - 1].path
        })
      }
    },
    isActive(route) {
      return route.path === this.$route.path
    }
  },
  mounted () {
    this.addViewTags()
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 1px 4px 0px #e4e4e4;;
  .tag {
    display: inline-block;
    margin-right: 10px;
    padding: 2px 5px;
    font-size: 12px;
    line-height: 18px;
    border-radius: 2px;
    border: 1px solid #eee;
    cursor: pointer;
    .el-icon-close {
      padding: 2px;
      border-radius: 50%;
      transition: background 0.3s;
      &:hover {
        background: rgb(230, 229, 229);
      }
    }
    &.active {
      background-color: #12d492;
      color: #fff;
      .el-icon-close {
        &:hover {
          background: #10bb82;
        }
      }
    }
  }
}
</style>
