<template>
	<v-card class="mt-2 px-2" width="100%" elevation="0" >
		<v-row class="ma-2">
			<v-col md="6">
				<v-card> 

				<v-carousel 
					cycle
					data-fancybox
					show-arrows-on-hover
					hide-delimiters
					max-height="100px"
					style="max-height:100vh"
				>
				

					<v-carousel-item
					
						v-for="(img, i) in order.images"
						:key="i"
						:src="url_api+img.path"
						style="max-width:100%;box-sizing:border-box;"

					/>
					
				</v-carousel>
				</v-card>
			</v-col>
			<v-col>
				<!-- Название товара -->
			<v-card-title>{{ order.title }}</v-card-title>
			<!-- Название страницы -->
				<template v-if="order.own">
					<v-card-subtitle class="blue--text">
						Ваша • {{ order.order_type_title }}
					</v-card-subtitle>
				</template>

				<template v-else>
					<v-card-subtitle>{{ order.order_type_title }}</v-card-subtitle>
				</template>
			<!-- Детали товара -->
			<v-simple-table>
				<template class="hhh">
					<tbody>
				<tr class="text-caption">
					<td class="text-h6">Цена</td>
					<td class="text-h6 font-weight-bold">
						{{ order.price }} Сом {{ order.currency }}
					</td>
				</tr>
				<tr class="text-caption">
					 <td class="grey--text">{{ $t(`admin.order.order_view.amount`) }}:</td>
					 <td>{{ order.amount }} / {{ order.weight }}</td>	
				</tr>
				<tr class="text-caption">
					  <td class="grey--text">{{ $t(`admin.order.order_view.cost`) }}: </td>
					  <td>{{ order.cost }}</td>
				</tr>
				<tr class="text-caption">
					  <td class="grey--text">{{ $t(`admin.order.order_view.delivery`) }}: </td>
					  <td>{{ order.delivery }}</td>
				</tr>
				<tr class="text-caption">
					  <td class="grey--text">{{ $t(`admin.order.order_view.payment`) }}:</td>
					  <td>{{ order.payment }}</td>
				</tr>
				<v-col>
					<tools />
				</v-col>
				  </tbody>
				</template>
			</v-simple-table>
			</v-col>
		</v-row>
		<offer style="margin-top:30px;" />
		<!-- Описание товара -->
		<v-card-title>Описание</v-card-title>
<v-row class="px-4">
    <v-col> 
                <p>Мы - один из основных экспортеров Картофеля Мозика высшего качества. 
                    Мы гарантируем вам лучшую цену и одобренный вкус. Он имеет спелость 
                    первичного урожая и подходит для производства качественной хрустящей 
                    корочки как в свежем виде, так и для краткосрочного хранения. 
                    Его употребляют в хорошем вкусе, варят, выпекают и хорошо заправляют.
				</p>
    </v-col>
</v-row>
<!-- Данные пользователя -->
<v-row class="my-5">
  <v-col>
    <v-card-title>Пользователь</v-card-title>
  </v-col>
</v-row>

<v-simple-table max-height="300px">
  
    <template>
      <tbody>
        <tr>
          <td>
			  <v-card-title>Название компании:</v-card-title></td>
          <td>
             <h6 class="text-subtitle-1">Осоо компания картошка завод</h6>
          </td>
        </tr>
          <tr>
            <td>
			<v-card-title>Представитель компании:</v-card-title>
			</td>
          <td> 
            <h6 class="text-subtitle-1">Рахманбердиев Калысбек</h6>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
	</v-card>
</template>

<script>
import Offer from "./Offer.vue";
import Tools from "./Tools.vue";
export default {
	data: () => ({
		url_api: process.env.VUE_APP_BACK_API
	}),
	props: ['order'],
	components: { Tools, Offer }
};
</script>

<style scoped>

</style>
