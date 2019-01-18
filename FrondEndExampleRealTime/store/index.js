import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moment from 'moment' 

const createStore = () => {
    return new Vuex.Store({
        state: {
            items:[{
                date: '2016-05-03',
                birthday: '2016-12-03',
                username: 'Tom',
                gender: 'Male',
                hobbies: ["Eat"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-06-22',
                username: 'Jhon',
                gender: 'Male',
                hobbies: ["Cine"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-01-14',
                username: 'Freddy',
                gender: 'Male',
                hobbies: ["Sports","Cine"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-05-03',
                username: 'Anthon',
                gender: 'Male',
                hobbies: ["Eat","Cine"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-05-03',
                username: 'Fran',
                gender: 'Male',
                hobbies: ["Eat","Sports","Others"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-05-03',
                username: 'Thund',
                gender: 'Male',
                hobbies: ["Eat","Sports"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-05-03',
                username: 'Tom2',
                gender: 'Male',
                hobbies: ["Eat","Cine"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              },{
                date: '2016-05-03',
                birthday: '2016-05-03',
                username: 'Fran3',
                gender: 'Male',
                hobbies: ["Eat","Cine"],
                note: 'No. 189, Grove St, Los Angeles CA 90036',
                status:true
              }]
        },
        getters: getters,
        actions: actions,
        mutations: mutations,


    });
};

export default createStore;