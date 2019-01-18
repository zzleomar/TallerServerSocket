<template>
  <div>
    <el-table
        highlight-current-row
        ref="tableUsers"
        :data="tableData3"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>Gender: {{ props.row.gender }}</p>
            <p>Birthday: {{ props.row.birthday }}</p>
            <p class="divaux">Hobbies:<div v-for="(item, index) in props.row.hobbies" :key="index" class="divaux">{{ index==(props.row.hobbies.length-1)?item:item+"," }}</div></p>
            <p>Note: {{ props.row.note }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="Creation Date"
          prop="date">
        </el-table-column>
        <el-table-column
          label="Username"
          prop="username">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button-group>
              <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row,scope.$index)"></el-button>
              <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.$index)"></el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table> 
  </div>
</template>

<script>
import vm from '~/assets/event-bus.js';
  export default {
    created() {
    let ctx=this
      vm.$on('animate', function (index) { 
        console.log("escucha",index)
        ctx.index=index
        ctx.animate()
      });
    },
    data() {
      return {
        index: null,
        currentRow: null
      }
    },
    computed: {
      tableData3: function() {
        return this.$store.getters.get_items;
      }
    },
    methods: {
      edit(row, index){
        vm.$emit('edit', {row:row,index:index}) 
      },
      animate(){
        console.log(this.index);
        this.$refs.tableUsers.setCurrentRow(this.index);
      },
      remove(index){
        this.$confirm('This will delete the user. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('act_delete_user', index);
        }).catch(() => {
          this.index= null
          this.currentRow= null       
        });
      }
    },
  }
</script>

<style >
  .divaux{
    display: inline-block;
    margin-right: 5px;
  }
</style>