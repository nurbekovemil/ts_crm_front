
export default{
  state:{
    message:{
      isAlert: false,
      text:'',
      color:''
    }
  },
  mutations:{
    SUCCESS_MESSAGE(state, data){
      state.message = {
        isAlert: true,
        text: data.message,
        color: 'success',
        icon: 'mdi-check-circle'
      }
    },
    WARNING_MESSAGE(state, data){
      state.message = {
        isAlert: true,
        text: data.message,
        color: 'warning',
        icon:'mdi-alert'
      }
    },
    ERROR_MESSAGE(state, data){
      state.message = {
        isAlert: true,
        text: data.message,
        color: 'error',
        icon:'mdi-alert-octagon'
      }
    },
    RESET_MESSAGE(state){
      state.message = {
        isAlert: false,
        text: '',
        color: ''
      }
    }
  },
  getters: {
    GET_MESSAGE(state){
      return state.message
    }
  }
}
