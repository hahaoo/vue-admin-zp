<template>
  <div class="wh100 tag-wrap">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type"
      effect="dark"
      @close="handleClose(tag)"
      @click="toTags(tag)"
    >
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "TagLink",
  components: {},
  data() {
    return {
      tags: []
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(to) {
        if (to.meta.isTab) {
          for (let i = 0; i < this.tags.length; i++) {
            if (to.meta.links[0] == this.tags[i].name) {
              for (let j = 0; j < this.tags.length; j++) {
                this.tags[j].type = "warning";
              }
              this.tags[i].type = "success";
              return;
            }
          }
          for (let i = 0; i < this.tags.length; i++) {
            this.tags[i].type = "warning";
          }
          if (this.tags.length < 6) {
            //最多6个路径标签
            let tag = {
              name: "",
              type: "success",
              path: ""
            };
            tag.name = to.meta.links[0];
            tag.path = to.fullPath;
            this.tags.push(tag);
          } else {
            this.tags.shift();
            let tag = {
              name: "",
              type: "success",
              path: ""
            };
            tag.name = to.meta.links[0];
            tag.path = to.fullPath;
            this.tags.push(tag);
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleClose(tag) {
      if (tag.type == "success") {
        let n = this.tags.indexOf(tag) - 1;
        if (n >= 0) {
          this.$router.push(this.tags[n].path);
        } else {
          this.$router.push("/");
        }
      }
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    toTags(tag) {
      this.$router.push(tag.path);
    }
  }
};
</script>
<style lang="less" scoped>
.tag-wrap {
  .el-tag {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
