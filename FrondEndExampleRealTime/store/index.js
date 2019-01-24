import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: []
      // items:[{
      //     date: '2016-05-03',
      //     birthday: '2016-12-03',
      //     username: 'Tom',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-06-22',
      //     username: 'Jhon',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-01-14',
      //     username: 'Freddy',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-05-03',
      //     username: 'Anthon',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-05-03',
      //     username: 'Fran',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-05-03',
      //     username: 'Thund',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-05-03',
      //     username: 'Tom2',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   },{
      //     date: '2016-05-03',
      //     birthday: '2016-05-03',
      //     username: 'Fran3',
      //     gender: 'Male',
      //     note: 'No. 189, Grove St, Los Angeles CA 90036',
      //     status:true
      //   }]
    },
    getters: getters,
    actions: actions,
    mutations: mutations

  })
}

export default createStore
