<script>
import { defineComponent } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    }
  },
  methods: {

    pegaEventos(){

      calendarApi.getEvents({
        title,
      })
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Adicione o Evento')
      let calendarApi = selectInfo.view.calendar

      console.log(title);
      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Tem certeza que deseja deletar este evento? '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  }
})

</script>

<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <FullCalendar class='demo-app-calendar' :options='calendarOptions'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang='css'>

b { /* used for event dates/times */
  margin-right: 3px;
}

.fc-prev-button{
  background-color: #004777;
  color: #cedde7;
}

.fc .fc-button-primary{
  border-color: #004777;
  color: #cedde7;
  background-color: #004777;
}

.fc .fc-button-primary:hover {
  background-color: #061d2c;
}

.fc .fc-button-primary:not(:disabled).fc-button-active, .fc .fc-button-primary:not(:disabled):active {
  background-color: #061d2c;
  border-color: #061d2c;
  color: #cedde7;
}

a{
  text-decoration: none;
  color: #004777;
}



.demo-app {
  /* display: flex; */
  /* min-height: 80%; */
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  max-height: 980px;
}

.demo-app-main {
  /* flex-grow: 1;
  padding: 3em; */
  max-height: 980px;
}

.fc { /* the calendar root */
  /* max-width: 980px; */
  max-height: 800px;
  height: 80vh;
  width: 75vw;
  /* margin: 0 auto; */
}

</style>
