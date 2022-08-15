<template>
<span>
    <b>Биржевое время: </b> {{hour + ':' + minute + ':' + second + ' | ' + weekdays[day -1] + ',' + new Date().getDate() + ' ' + yearmonth[month] + ' ' + new Date().getFullYear()}}
</span>
</template>

<script>
export default {
    data:() => ({
        kseDate:'',
        weekdays:['пн','вт','ср','чт','пт','сб','вс'],
        yearmonth:['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
        month:'',
        day:'',
        hour:'',
        minute:'',
        second:''
    }),
  methods:{
      ksedatea: function() {
        this.day = new Date().getDay()
        this.hour = new Date().getHours()
        this.minute = new Date().getMinutes()
        this.second = new Date().getSeconds()
        this.month = new Date().getMonth()
      },
    showKseTime: function() {
        let date = this
      setInterval(function () {
          date.ksedatea()
      },1000)    
    },
  },
    mounted() {
    this.ksedatea()
    this.showKseTime()
  },
}
</script>

<style>

</style>