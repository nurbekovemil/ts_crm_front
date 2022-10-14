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
    <div style="background: #f5f6f7">
      <v-container>
        <v-row style="height: 100px" class="wrapper-tskse-info">
          <v-col class="wrap-tskse-info" cols="12">
            <v-card
              class="text-center rounded-lg py-3"
              style="vertical-align: text-top"
            >
              <div class="tskse-info">
                <div
                  v-for="item in exchangeRates.currency"
                  :key="item.key"
                  class="info-box"
                >
                  <h3 style="color: #78c3cc; font-weight: bold">
                    {{ item.name }}
                  </h3>
                  <p class="mb-0">{{ item.money }}</p>
                </div>
              </div>
              <h3 style="color: gray" class="subtitle-2">
                Официальные курсы валют Национального банка КР на
                {{ exchangeRates.date }} года
              </h3>
            </v-card>
          </v-col>
        </v-row>
        <order-list type="1" />
        <order-list type="2" />
        <v-row class="mb-15" style="position: relative">
          <v-col cols="12">
            <h2 style="color: #868d94" class="pt-4">С чего начать?</h2>
          </v-col>
          <v-col v-for="item in howStart" :key="item.key" cols="12" md="3">
            <v-card
              class="
                text-center
                align-center
                d-flex
                flex-column
                align-center
                pa-5
              "
              height="100%"
              :href="item.link"
            >
              <v-icon
                large
                size="40"
                style="
                  border: 2px solid #78c3cc;
                  padding: 15px;
                  border-radius: 100%;
                "
                color="#78C3CC"
              >
                {{ item.icon }}
              </v-icon>
              <v-card-title
                class="body-1 font-weight-black mytext"
              ></v-card-title>
            </v-card>
          </v-col>
          <template v-if="blogs.length > 0">
            <v-col cols="12">
              <h2 style="color: #868d94" class="pt-4">Новости</h2>
            </v-col>
            <v-col>
              <v-sheet class="mx-auto" elevation="2" max-width="100%">
                <v-slide-group class="pa-4" v-model="modelBlog" show-arrows>
                  <v-slide-item v-for="blog in blogs" :key="blog.id">
                    <v-card
                      class="ma-4"
                      @click="viewBlog(blog.id)"
                      height="200"
                      width="400"
                    >
                      <v-card-title>
                        {{ blog.title }}
                      </v-card-title>
                      <v-card-subtitle>
                        {{ blog.created_at }}
                      </v-card-subtitle>
                      <v-card-text>
                        {{
                          blog.description.length > 200
                            ? blog.description.slice(0, 215) + "..."
                            : blog.description
                        }}
                      </v-card-text>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import OrderList from "../../components/content/Home/OrderList.vue";
export default {
  data: () => ({
    modelBlog: null,

    exchangeRates: {
      date: "",
      currency: [],
    },
    howStart: [
      {
        text: "Вход с помощью <br> Логин и Пароль",
        icon: "mdi-usb-flash-drive",
        link: "login",
      },
      {
        text: "Ознакомиться <br> с Правилами <br> торгов",
        icon: "mdi-file-document-multiple",
        link: "ksedocuments",
      },
      {
        text: "Начать торговать <br> на Бирже",
        icon: "mdi-account-box",
        link: "catalog",
      },
      {
        text: "Подать заявку на <br> участие торгах",
        icon: "mdi-currency-usd",
        link: "registration",
      },
    ],
  }),
  components: {
    OrderList,
  },
  computed: {
    ...mapState("blog", ["blogs"]),
  },
  methods: {
    ...mapActions("exchangeRates", ["GET_CURRENT_EXCHANGE"]),
    ...mapActions("blog", ["GET_BLOG_LIST"]),
    async getCurrentRates() {
      await this.GET_CURRENT_EXCHANGE().then((data) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.data, "application/xml");
        let exDate = xml.querySelector("CurrencyRates");
        let exMoney = xml.querySelectorAll("Value");
        let exName = xml.querySelectorAll("Currency");
        this.exchangeRates.date = exDate.getAttribute("Date");
        for (let i = 0; i < exMoney.length; i++) {
          this.exchangeRates.currency.push({
            money: exMoney[i].textContent,
            name: exName[i].getAttribute("ISOCode"),
          });
        }
      });
    },
    viewBlog(id) {
      this.$router.push("/blogs/" + id);
    },
  },
  async mounted() {
    this.getCurrentRates();
    for (let i = 0; i < this.howStart.length; i++) {
      document.querySelectorAll(".mytext")[i].innerHTML = this.howStart[i].text;
    }
    this.GET_BLOG_LIST();
  },
};
</script>
<style scoped>
.icon-wrapper {
  border: 1px solid #78c3cc;
  padding: 10px;
}
.wrapper-tskse-info {
  position: relative;
}
.wrap-tskse-info {
  position: absolute;
  top: -50%;
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
@media (max-width: 600px) {
  .tskse-info p {
    font-size: 0.7em;
  }
}
@media (max-width: 320px) {
  .info-box {
    min-height: 86px;
  }
}
</style>
