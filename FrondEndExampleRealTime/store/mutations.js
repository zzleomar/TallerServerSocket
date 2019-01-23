import vm from '~/assets/event-bus.js';
const mutations = {
    //landing
    mut_items: (state, items) => {
        state.items = items;
    },

    mut_new_user: (state, user) => {
        state.items.unshift(user);
        vm.$emit('animate', 0) 
    },

    mut_edit_user: (state, [user,index]) => {
        state.items[index].username=user.username
        state.items[index].gender=user.gender
        state.items[index].birthday=user.birthday
        state.items[index].date=user.date
        state.items[index].status=user.status
        state.items[index].hobbies=user.hobbies
        state.items[index].resource=user.resource
        state.items[index].note=user.note
        vm.$emit('animate', index) 
    },

    mut_delete_user: (state, index) => {
        state.items.splice(index,1);
    },
}

export default mutations;
