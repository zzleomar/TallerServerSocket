import vm from '~/assets/event-bus.js'
const mutations = {
  // landing
  mut_items: (state, items) => {
    state.items = items
  },

  mut_new_user: (state, user) => {
    state.items.unshift(user)
    vm.$emit('animate', 0)
  },

  mut_edit_user: (state, [user, index]) => {
    state.items[index].username = user.username
    state.items[index].gender = user.gender
    state.items[index].birthday = user.birthday
    state.items[index].date = user.date
    state.items[index].status = user.status
    // state.items[index].hobbies = user.hobbies
    state.items[index].resource = user.resource
    state.items[index].note = user.note
    vm.$emit('animate', index)
  },

  mut_socket_delete_user: (state, data) => {
    console.log('delete', data)
    for (let index = 0; index < state.items.length; index++) {
      // eslint-disable-next-line eqeqeq
      if (state.items[index].id == data) {
        console.log(state.items)
        state.items.splice(index, 1)
        console.log(state.items)
      }
    }
  },

  mut_socket_update_user: (state, data) => {
    for (let index = 0; index < state.items.length; index++) {
      if (state.items[index].id === data.id) {
        state.items[index].username = data.username
        state.items[index].gender = data.gender
        state.items[index].birthday = data.birthday
        state.items[index].date = data.date
        state.items[index].status = data.status
        // state.items[index].hobbies = data.hobbies
        state.items[index].resource = data.resource
        state.items[index].note = data.note
        break
      }
    }
  }
}

export default mutations
