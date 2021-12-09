<template>
	<div>
		<v-tabs v-model="selected_tab" left>
			<v-tabs-slider color="primary" />
			<v-tab>
				Продукты
			</v-tab>
      <v-tab>
				Категории
			</v-tab>
		</v-tabs>
		<v-tabs-items v-model="selected_tab">
			<v-tab-item>
        <products/>
      </v-tab-item>
      <v-tab-item>
        <categories/>
      </v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
import Products from '@/components/admin/Catalog/Products/List'
import Categories from '@/components/admin/Catalog/Categories/List'
export default {
  data: () => ({
    selected_tab: null,
  }),
  components: {
    Products,
    Categories
  }
};
</script>

<style></style>
