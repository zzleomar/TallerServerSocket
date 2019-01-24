<template>
  <div>
    <el-row :gutter="24">
      <el-col
        :span="14"
        :offset="1">
        <tabla/>
      </el-col>
      <el-col :span="8">
        <div id="newUser">
          <form-user/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tabla from '~/components/TableUsers'
import formUser from '~/components/FormUser'
export default {
  components: {
    tabla, formUser
  },
  data () {
    return {
      show3: false
    }
  },
  created () {
    this.$store.dispatch('act_load_items')
  }
}
</script>

<style scoped>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
