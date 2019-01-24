import Vue from 'vue'
import VueMoment from 'vue-moment'
Vue.use(VueMoment)
Vue.moment.locale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'segundos',
    m: 'un minuto', // change that to '%d minute'
    mm: '%d minutos',
    h: 'una hora', // here too
    hh: '%d horas',
    d: 'un dia', // and here
    dd: '%d dias',
    M: 'un mes', // and so on...
    MM: '%d meses',
    y: 'un año',
    yy: '%d años'
  }
})
