<template>
	<v-dialog v-model="isAddProduct" persistent max-width="60%">
		<v-card>
			<v-card-title>
				<span class="text-h5">Добавить продукт</span>
			</v-card-title>
			<v-card-text>
				<v-container>
					<v-row class="pa-3" cols="12">
						
					</v-row>
				</v-container>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="red" text @click="closeIsAddDialog">
					Отменить
				</v-btn>
				<v-btn color="success" @click="closeIsAddDialog">
					Добавить
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState('catalog', ['isAddProduct'])
  },
  methods: {
    ...mapMutations('catalog', ['SET_IS_DIALOG']),
    closeIsAddDialog(){
      this.SET_IS_DIALOG('isAddProduct')
    }
  }
};
</script>

<style></style>
