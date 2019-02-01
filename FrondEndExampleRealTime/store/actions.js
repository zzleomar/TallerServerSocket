import vm from '~/assets/event-bus.js'
import conf from '~/assets/config.js'
import axios from 'axios'

/* eslint-disable camelcase */
const url_api = conf.url_server + conf.urlApi

const actions = {
  // landing
  act_load_items: Store => {
    axios
      .get(url_api + '/user')
      .then(response => {
        console.log(response.data)
        Store.commit('mut_items', response.data)
      })
      .catch(error => {
        console.log(error)
        vm.$notify({
          title: 'warning',
          message: 'The server does not respond',
          type: 'error',
          offset: 20
        })
      })
  },
  act_new_user: (Store, data) => {
    let user = {
      username: data.username,
      gender: data.gender,
      birthday: vm.$moment(data.birthday).format('YYYY-MM-DD'),
      date: data.date,
      status: data.status,
      // hobbies:data.hobbies,
      resource: data.resource,
      note: data.note
    }
    axios
      .post(url_api + '/user', user)
      .then(response => {
        console.log('send created')
      })
      .catch(error => {
        console.log(error)
        vm.$notify({
          title: 'warning',
          message: 'The server does not respond',
          type: 'error',
          offset: 20
        })
      })
  },
  act_update_user: (Store, [data, index]) => {
    let user = {
      id: data.id,
      username: data.username,
      gender: data.gender,
      birthday: vm.$moment(data.birthday).format('YYYY-MM-DD'),
      date: data.date,
      status: data.status,
      // hobbies:data.hobbies,
      resource: data.resource,
      note: data.note
    }
    axios
      .put(url_api + '/user/' + user.id, user)
      .then(response => {
        console.log(response.data)
        if (response) {
          console.log('algo hay')
        } else {
          vm.$notify({
            title: 'Error',
            message: 'Not Found Eror 404',
            type: 'error',
            offset: 20
          })
        }
      })
      .catch(error => {
        console.log(error)
        vm.$notify({
          title: 'warning',
          message: 'The server does not respond',
          type: 'error',
          offset: 20
        })
      })
  },
  act_delete_user: (Store, [id, index]) => {
    axios
      .delete(url_api + '/user/' + id)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
        vm.$notify({
          title: 'warning',
          message: 'The server does not respond',
          type: 'error',
          offset: 20
        })
      })
  },

  act_socket_new_user: (Store, data) => {
    Store.commit('mut_new_user', data)
    vm.$notify({
      title: 'Success',
      message: 'New User Addede',
      type: 'success',
      offset: 20
    })
  },

  act_socket_delete_user: (Store, data) => {
    Store.commit('mut_socket_delete_user', data)
    vm.$notify({
      title: 'Success',
      message: 'Delete User',
      type: 'success',
      offset: 20
    })
  },

  act_socket_update_user: (Store, data) => {
    Store.commit('mut_socket_update_user', data)
    vm.$notify({
      title: 'Success',
      message: 'Update User',
      type: 'success',
      offset: 20
    })
  }
}

export default actions
