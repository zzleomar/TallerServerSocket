<template>
  <div>
    <el-card
      :id="newtitle?'new':'edit'"
      class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span>{{ title }}</span>
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="Username"
          prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="Enter Username"/>
        </el-form-item>
        <el-form-item
          label="Gender"
          prop="gender">
          <el-select
            id="selectGender"
            v-model="ruleForm.gender"
            placeholder="Gender">
            <el-option
              label="Male"
              value="Male"/>
            <el-option
              label="Femele"
              value="Femele"/>
          </el-select>
        </el-form-item>
        <el-form-item
          label="Birthday"
          required>
          <el-col :span="11">
            <el-form-item prop="birthday">
              <el-date-picker
                v-model="ruleForm.birthday"
                type="date"
                placeholder="Pick a date"/>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item
          label="Status"
          prop="status">
          <el-switch v-model="ruleForm.status"/>
        </el-form-item>
        <el-form-item
          label="Note"
          prop="note">
          <el-input
            v-model="ruleForm.note"
            type="textarea"/>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button
              v-if="newtitle"
              type="success"
              icon="el-icon-plus"
              circle
              @click="submitForm('ruleForm')"
            >New</el-button>
            <el-button
              v-else
              type="primary"
              icon="el-icon-plus"
              circle
              @click="submitFormEdit('ruleForm')"
            >edit</el-button>
            <el-button
              type="info"
              icon="el-icon-refresh"
              circle
              @click="resetForm('ruleForm')"
            >Reset</el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import vm from '~/assets/event-bus.js'
export default {
  data () {
    return {
      title: 'New user',
      newtitle: true,
      indexEdit: null,
      ruleForm: {
        id: '',
        username: '',
        gender: '',
        birthday: '',
        date: '',
        status: false,
        // hobbies: [],
        resource: '',
        note: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: 'Please input usernaname',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 15,
            message: 'Length should be 3 to 15',
            trigger: 'blur'
          }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        birthday: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change'
          }
        ]
        // hobbies: [
        //   { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        // ],
      }
    }
  },
  created () {
    let ctx = this
    vm.$on('edit', function ({ row, index }) {
      ctx.resetForm('ruleForm')
      ctx.ruleForm.id = row.id
      ctx.ruleForm.username = row.username
      ctx.ruleForm.gender = row.gender
      ctx.ruleForm.birthday = new Date(row.birthday)
      ctx.ruleForm.status = row.status
      // ctx.ruleForm.hobbies=row.hobbies;
      ctx.ruleForm.resource = row.resource
      ctx.ruleForm.date = row.date
      ctx.ruleForm.note = row.note
      ctx.title = 'Edit User'
      ctx.newtitle = false
      ctx.indexEdit = index
    })
  },
  methods: {
    submitFormEdit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch('act_update_user', [
            this.ruleForm,
            this.indexEdit
          ])
          this.resetForm('ruleForm')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ruleForm.date = this.$moment().format('YYYY-MM-DD')
          this.$store.dispatch('act_new_user', this.ruleForm)
          this.resetForm('ruleForm')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.ruleForm.note = ''
      this.title = 'New User'
      this.newtitle = true
      this.indexEdit = null
    }
  }
}
</script>

<style>
.el-select {
  width: 100%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
#newUser > div > div > div.el-card__header {
  border-top-left-radius: 25px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
}
#new > div.el-card__header {
  background: #67c23a;
}
#edit > div.el-card__header {
  background: #1166f0;
}
</style>
