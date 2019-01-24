<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"/>
      </el-col>
    </el-row>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal">
      <el-menu-item
        index="1"
        @click="redirect('/')">Home</el-menu-item>
      <el-menu-item
        index="2"
        @click="redirect('/users')">
        <el-badge
          :value="rowsize"
          class="item">Users</el-badge>
      </el-menu-item>
    </el-menu>
    <nuxt/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    rowsize: function () {
      return this.$store.getters.get_items.length
    }
  },
  created () {
    /* eslint-disable no-undef */
    // eslint-disable-next-line eqeqeq
    this.activeIndex = $nuxt.$route.path == '/users' ? '2' : '1'
    console.log(this.activeIndex)
  },
  methods: {
    redirect (ref) {
      this.$router.push(ref)
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.bg-purple-dark {
  background: #a9a9a9;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
