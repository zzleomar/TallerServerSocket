<template>
  <div>
    <el-table
      ref="tableUsers"
      :data="tableData3"
      highlight-current-row
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <p>Gender: {{ props.row.gender }}</p>
          <p>Birthday: {{ props.row.birthday }}</p>
          <p>Note: {{ props.row.note }}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="Creation Date"
        prop="date">
        <template slot-scope="scope">{{ scope.row.createdAt | moment('YYYY-MM-DD') }}</template>
      </el-table-column>
      <el-table-column
        label="Username"
        prop="username"/>
      <el-table-column>
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="edit(scope.row,scope.$index)"
            />
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="remove(scope.row.id,scope.$index)"
            />
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import vm from '~/assets/event-bus.js'
export default {
  data () {
    return {
      index: null,
      currentRow: null
    }
  },
  computed: {
    tableData3: function () {
      return this.$store.getters.get_items
    }
  },
  created () {
    let ctx = this
    vm.$on('animate', function (index) {
      console.log('escucha', index)
      ctx.index = index
      ctx.animate()
    })
  },
  methods: {
    edit (row, index) {
      vm.$emit('edit', { row: row, index: index })
    },
    animate () {
      console.log(this.index)
      this.$refs.tableUsers.setCurrentRow(this.index)
    },
    remove (id, index) {
      let ctx = this
      this.$confirm('This will delete the user. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => {
          ctx.$store.dispatch('act_delete_user', [id, index])
        })
        .catch(() => {
          ctx.index = null
          ctx.currentRow = null
        })
    }
  }
}
</script>

<style >
.divaux {
  display: inline-block;
  margin-right: 5px;
}
</style>
