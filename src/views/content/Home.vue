<template>
  <div>
    <v-row>
      <v-col class="">
        <v-img
          src="@/assets/stock-front.jpeg"
          height="450"
          cover
          class="grey darken-4 white--text align-center text-center"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-container>
            <p class="text-h4 font-weight-bold text-sm-h4 text-md-h3">
              Развивайте свой бизнес с нами!
              <br />
              <span class="text-h5 text-md-h5">
                Находите новые сделки, новых партнёров!
              </span>
            </p>
          </v-container>
        </v-img>
      </v-col>
    </v-row>
  <div style="background:#F5F6F7">
      <v-container>
      <v-row style="height:100px;"  class="wrapper-tskse-info">
        <v-col class="wrap-tskse-info" cols="12">
          <v-card class="text-center tskse-info rounded-lg py-3" style="vertical-align: text-top;">
                <div v-for="item in tsKseInfo" :key="item.key" class="info-box">
                  <h2 style="color:#78C3CC;font-weight:bold;">{{item.count}}</h2>
                  <p class="mb-0" >{{item.text}}</p>
                </div>
          </v-card>
        </v-col>
      </v-row>

         <v-row class="mb-15" style="position:relative" >
          <v-col cols="12">
            <h2 style="color:#868D94;" class="pt-4">С чего начать?</h2>
          </v-col>
          <v-col v-for="item in howStart" :key="item.key" cols="12" md="3">
          <v-card class="text-center align-center d-flex flex-column align-center pa-5" height="100%" :href="item.link">
            <v-icon
               large
               size="40"
               style="border:2px solid #78C3CC;padding:15px;border-radius:100%;"
              color="#78C3CC">
              {{item.icon}}
            </v-icon>
            <v-card-title class="body-1 font-weight-black mytext"></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
    <!-- <order-list type="1" /> -->
    <!-- <order-list type="2" /> -->
  </div>
</template>

<script>
import OrderList from "../../components/content/Home/OrderList.vue";
export default {
  data:() => ({
    tsKseInfo:[
      {count:'23',text:'Страны участницы'},
      {count:'2846',text:'Зарегистрированных участников'},
      {count:'245',text:'Видов товаров'},
      {count:'365',text:'Дней в год проходят торги'}
    ],
    howStart:[
      {text:'Вход с помощью <br> Логин и Пароль',icon:'mdi-usb-flash-drive',link:'login'},
      {text:'Ознакомиться <br> с Правилами <br> торгов',icon:'mdi-file-document-multiple',link:'documents'},
      {text:'Начать торговать <br> на Бирже',icon:'mdi-account-box',link:'catalog'},
      {text:'Подать заявку на <br> участие торгах',icon:'mdi-currency-usd',link:'registration'}
    ]
  }),
  components: {
    OrderList,
  },
  mounted() {
    for(let i =0;i< this.howStart.length;i++) {
      document.querySelectorAll('.mytext')[i].innerHTML = this.howStart[i].text
    }
  }
};
</script>
<style scoped>
.icon-wrapper {
  border: 1px solid #78C3CC;
  padding: 10px;
}
.wrapper-tskse-info {
  position: relative;
}
.wrap-tskse-info {
  position: absolute;
  top:-50%;
  min-height: 200px;
}
.tskse-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.how-start {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding: 20px;
}
@media(max-width:600px) {
  .tskse-info p{
    font-size:0.7em
  }
 
}
@media(max-width:320px) {
 .info-box {
    min-height: 86px;
  }
}
</style>
