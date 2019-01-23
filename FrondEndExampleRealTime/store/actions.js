import vm from '~/assets/event-bus.js';

const actions = {
    //landing
    act_load_items: (Store, items) => {
        Store.commit('mut_items', items);
    },
    act_new_user: (Store, data) => {
        let user= {
            username:data.username,
            gender:data.gender,
            birthday:vm.$moment(data.birthday).format('YYYY-MM-DD'),
            date:data.date,
            status:data.status,
            hobbies:data.hobbies,
            resource:data.resource,
            note:data.note
          }
        Store.commit('mut_new_user', user);
        vm.$notify({
            title: 'Success',
            message: 'New User Addede',
            type: 'success',
            offset: 20
        });
    },
    act_update_user: (Store, [data,index]) => {
        console.log('act_update_user',index)
        let user= {
            username:data.username,
            gender:data.gender,
            birthday:vm.$moment(data.birthday).format('YYYY-MM-DD'),
            date:data.date,
            status:data.status,
            hobbies:data.hobbies,
            resource:data.resource,
            note:data.note
          }
        Store.commit('mut_edit_user', [user,index]);
        vm.$notify({
            title: 'Success',
            message: 'Update User',
            type: 'success',
            offset: 20
        });
    },
    act_delete_user: (Store, index) => {
        Store.commit('mut_delete_user', index);
        vm.$notify({
            title: 'Success',
            message: 'Delete User',
            type: 'success',
            offset: 20
        });
    },
}

export default actions;
