<template>
	<div id="printDeal">
		{{order}}
		<h5>Зарегистрировано в ЗАО «Кыргызская Фондовая Биржа»</h5>
		<table class="tb">
			<tbody>
				<tr>
					<td>Регистрационный номер №</td>
					<td>{{deal.id}}</td>
				</tr>
				<tr>
					<td>Дата</td>
					<td>{{deal.created_at}}</td>
				</tr>
				<tr>
					<td >Ф.И.О. уполномоченного лица</td>
					<td ></td>
				</tr>
				<tr>
					<td >Должность</td>
					<td ></td>
				</tr>
				<tr>
					<td >Подпись</td>
					<td ></td>
				</tr>
			</tbody>
		</table>
    <span>м.п.</span>
    <div>
      <div style="text-align: center">
        <h5>БИРЖЕВОЙ ДОГОВОР № </h5> 	 
      </div>
      <div style="display: flex;justify-content: space-between;">
        <span>г. Бишкек</span>
        <span>«    »	  ,	   г.</span>
      </div>
    </div>
		<div>
			<template>
				<table class="tb">
					<tbody>
						<tr>
							<td>Наименование Посетителя торгов - {{sortType(deal.order_type_from)}}</td>
							<td>{{deal.user_from_name}}</td>
						</tr>
						<tr>
							<td>Регистрационный номер Посетителя торгов - {{sortType(deal.order_type_from)}}</td>
							<td>{{deal.user_from}}</td>
						</tr>
					</tbody>
				</table>
				<p>именуемый в дальнейшем «Продавец», в лице Трейдера Посетителя торгов -  <b></b>, действующего по доверенности (прилагается) ,с одной стороны, и</p>
			</template>
			<template>
				<table class="tb">
				<tbody>
					<tr>
						<td>Наименование Посетителя торгов - {{sortType(deal.order_type_to)}}</td>
						<td>{{deal.user_to_name}}</td>
					</tr>
					<tr>
						<td>Регистрационный номер Посетителя торгов - {{sortType(deal.order_type_to)}}</td>
						<td>{{deal.user_to}}</td>
					</tr>
				</tbody>
			</table>
			<p>,именуемый в дальнейшем «Покупатель», в лице Трейдера Посетителя торгов - Покупателя <b></b>, действующего по доверенности (прилагается), с другой стороны, совместно именуемые в дальнейшем 
			«Стороны», заключили настоящий договор о нижеследующем:</p>
			</template>
		</div>
      <div style="text-align: center">
        <h5>1.ПРЕДМЕТ ДОГОВОРА</h5> 	 
      </div>
    
    <p>Настоящий Договор заключен на основании биржевой сделки, совершенной в ходе бессрочных биржевых торгов в ЗАО «Кыргызская Фондовая Биржа» «__» _________ , 2021 г. ( далее- Биржевая сделка) на следующих условиях: </p>
    <table class="tb">
			<tbody>
				<tr>
					<td>Регистрационный номер сделки </td>
					<td>{{deal.id}}</td>
				</tr>

				<tr v-for="(value, name, i) in orderView" :key="i">
					<td>{{ $t(`admin.deal.${name}`)}}</td>
					<td>{{value}}</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
export default {
	props: ['deal', 'order'],
	methods: {
		sortType: type => type == 1 ? 'Продавца':'Покупателя',
	},
	computed: {
		orderView() {
			const noshow = ['id', 'status', 'order_type', 'own', 'updated_at', 'user_id', 'description','created_at'];
			const filtered = Object.keys(this.order).filter(key => !noshow.includes(key)).reduce((obj, key) => (obj[key] = this.order[key], obj),{});
			return filtered
		}
	}
};
</script>

<style scoped>
.tb {
  width:100%;
	border-collapse: collapse;
	border-spacing: 0;
}
.tb td {
	border: solid 1px black;
	font-family: Arial, sans-serif;
	font-size: 14px;
  padding: 5px;
}
.tb td:first-child{
  width: 40%
}
p{
  font-size: 14px;
}

</style>
