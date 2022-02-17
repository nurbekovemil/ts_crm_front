<template>
<v-row>
    <v-col class="background-category mb-10">
	  <v-container class="fill-height">
        <v-row>
		  <v-col class="my-5">

				<div class="text-body-1 text-lg-h5 my-0 d-flex justify-space-between">
					Категория
					<router-link to="/"  class="view-all ">Посмотреть еще</router-link>
			
				</div>
		

  <v-row>
	<v-col class="my-3" cols="6" sm="4" md="3" v-for="order in categories" :key="order.id">
	    <v-card class="my-0 rounded-lg" width="350" border="5">
            <v-img
              :src="order.img"
              class="white--text"
              height="200px">
            </v-img>
             <v-card-title class="grey lighten-4"> {{order.title}} </v-card-title>
          </v-card>
	</v-col>
  </v-row>

  	</v-col>
</v-row>

</v-container>
</v-col>
</v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {

	props: ["type"],
	data: () => ({
		model: null,

        categories: [
            {title: 'Сельскохоз продукция', img:'https://ktonanovenkogo.ru/image/sel-hoz-vo-ovtca.jpg'}, 
            {title: 'Электроника', img:'https://ksonline.ru/wp-content/uploads/2020/02/electronic.jpeg'},
            {title: 'Строй материалы', img:'https://i.archi.ru/i/342121.jpg'}, 
            {title: 'Транспорт сред', img:'https://kz.all.biz/img/kz/catalog/71291.jpeg'}
        ]
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
	.background-category {
        background: #DDEFFD;
    }
	.view-all {
		color:#BE304A;
		text-decoration: none;
		font-size: 17px;
	}
	
</style>
