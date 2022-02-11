<template>
  <v-container class="pa-0 fill-height">
    <v-row>
      <v-col class="px-8 my-5">
        <div
          class="text-body-1 text-lg-h5 my-4 d-flex justify-space-between"
          @click="knowType()"
        >
          {{ type == 1 ? "Заявки на продажу" : "Заявки на покупку" }}
          <router-link :to="`/orders/${type}`" class="view-all"
            >Посмотреть еще</router-link
          >
        </div>
        <v-row>
          <v-col
            class="my-3"
            cols="6"
            sm="4"
            md="3"
            v-for="order in getOrderByType(type)"
            :key="order.id"
          >
            <!-- <v-card width="300">
								<v-img
									:src="url_api+order.images[0].path"
									gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.7)"
									dark
									height="200"
									
								>
									<v-card-title>
										{{ order.title }}
									</v-card-title>
									<v-card-text class="d-flex flex-column">
										<span>Цена:{{ order.price }} </span>
										<span>Количество:{{ order.amount }}</span>
										<span>Стоимость:{{ order.cost }}</span>
									</v-card-text>

									<v-card-actions>
										<v-btn
											text
											small
											outlined
											rounded
											@click="viewOrder(order.id)"
										>
											посмотреть
										</v-btn>
										<v-spacer />
										<span class="caption white--text">{{
											order.created_at
										}}</span>
									</v-card-actions>
								</v-img>
							</v-card> -->

            <v-card
              @click="viewOrder(order.id)"
              width="300"
              class="rounded-lg"
              elevation-3
            >
              <v-img
                :src="order.images"
                class="aaa white--text align-end fill-height bottom-gradient"
                gradient="to bottom, rgba(0,0,0,0) , rgba(0,0,0,0) , rgba(0,0,0,0),rgba(0,0,0,0.75)"
                height="280px"
              >
                <v-card-title> {{ order.title }} </v-card-title>
                <v-card-subtitle class="white--text">
                  {{ order.price }} сом
                </v-card-subtitle>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-sheet class="mx-auto" elevation="0" max-width="100%">
					<v-slide-group class="pa-0" center-active>
						<v-slide-item v-for="order in getOrderByType(type)" :key="order.id">
							<v-card class="ma-2" width="300">
								<v-img
									:src="order.images"
									gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
									dark
									height="200"
									contain
								>
									<v-card-title>
										{{ order.title }}
									</v-card-title>
									<v-card-text class="d-flex flex-column">
										<span>Цена:{{ order.price }} </span>
										<span>Количество:{{ order.amount }}</span>
										<span>Стоимость:{{ order.cost }}</span>
									</v-card-text>

									<v-card-actions>
										<v-btn
											text
											small
											outlined
											rounded
											@click="viewOrder(order.id)"
										>
											посмотреть
										</v-btn>
										<v-spacer />
										<span class="caption white--text">{{
											order.created_at
										}}</span>
									</v-card-actions>
								</v-img>
							</v-card>
						</v-slide-item>
					</v-slide-group>
				</v-sheet> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
	props: ["type"],
	data: () => ({
		model: null,
		url_api: process.env.VUE_APP_BACK_API
	}),
	computed: {
		...mapState("user", ["isAuth"]),
		...mapGetters("order", ["getOrderByType"]),
	},
	methods: {
		...mapActions("order", ["ALL_ORDER_LIST_HOME_PAGE"]),
		viewOrder(id) {
			this.$router.push("/order/" + id);
		},
	},
	mounted() {
		this.ALL_ORDER_LIST_HOME_PAGE(this.type);
	},
};
</script>

<style scoped>
.view-all {
  color: #be304a;
  text-decoration: none;
  font-size: 17px;
}
.aaa {
  box-shadow: inset 10px 10px 10px;
}
</style>
