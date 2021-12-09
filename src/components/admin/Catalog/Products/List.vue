<template>
	<div>
		<v-card>
			<v-card-title>
				Все продукты {{isAddProduct}}
				<v-spacer />
				<v-chip 
					class="ma-2" 
					color="primary" 
					@click="openIsAddDialog"
					outlined 
					pill
					>
					<v-icon left>
						mdi-plus
					</v-icon>
					Добавить
				</v-chip>
			</v-card-title>
			<v-card-text>
				Список товаров
			</v-card-text>
		</v-card>
		<add/>
	</div>
</template>

<script>
import Add from './Add.vue'
import {mapMutations, mapState} from 'vuex'
export default {
	components: {
		Add
	},
	computed: {
		...mapState('catalog', ['isAddProduct'])
	},
	methods: {
		...mapMutations('catalog', ['SET_IS_DIALOG']),
		openIsAddDialog(){
			this.SET_IS_DIALOG('isAddProduct')
		}
	}
};
</script>

<style></style>
