<template>
  <v-card style="width: 100%" elevation="0">
    <v-row no-gutters>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Группа товаров/услуг</v-list-item-title>
            <v-list-item-subtitle>{{
              order.product_group
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Цена</v-list-item-title>
            <v-list-item-subtitle>{{ order.price }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Стоимость</v-list-item-title>
            <v-list-item-subtitle>{{ order.cost }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-card-actions class="justify-end ma-1">
      <v-btn class="mr-3" plain small color="warning" router to="/dashboard/orderview">Подробнее</v-btn>
      <v-btn small color="success">Купить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    order: {
      id: 1,
      product_name: "Концентрированная томатная паста",
      product_group: "Сельскохозяйственная продукция",
      product_code:
        "2002909100. Прочие томаты, с содержанием сухого вещества более 30 мас%, в первичных упаковках нетто-массой более 1кг, приготовленные или консервированные без добавления уксуса или уксусной кислоты.",
      description:
        "Концентрированная томатная паста, 36-38% BRIX, собственного производства на высокотехнологичном заводе, подходит для изготовления томатной пасты, томатного сока, кетчупов, соусов и другой томатной продукции",
      country_of_origin: "Кыргызстан",
      manufacturing_company:
        "Крестьянское Семеноводческое Фермерское хозяйство",
      product_quality_indicators: "36-38% BRIX",
      information_about_the_product_packaging:
        "Асептический мешок в алюминевой бочке (230-250 кг)",
      information_about_the_product_labeling: "Нет",
      price: "1050$ за тонну",
      VAT: "12",
      nuber_of: "2000т",
      cost: "2 352 000$",
      location: "Чуйская область, Иссыкатинский район, с. Красная речка",
      payment_terms: "Предоплата",
      delivery_time: "В наличии",
      terms_of_delivery: "Самовывоз",
    },
  }),
};
</script>

<style>
</style>