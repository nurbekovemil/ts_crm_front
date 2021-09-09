<template>
  <v-card>
    <v-card-title class="mb-0"
      >{{ title }} &#183; {{ order.product_name }}</v-card-title
    >
    <v-row class="mt-4" no-gutters>
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
            <v-list-item-title>Код товара/услуги (ТН ВЭД)</v-list-item-title>
            <v-list-item-subtitle>{{
              order.product_code
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Описание</v-list-item-title>
            <v-list-item-subtitle>{{ order.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Страна производитель</v-list-item-title>
            <v-list-item-subtitle>{{
              order.country_of_origin
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Фирма производитель</v-list-item-title>
            <v-list-item-subtitle>{{
              order.manufacturing_company
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title
              >Качественные показатели товары</v-list-item-title
            >
            <v-list-item-subtitle>{{
              order.product_quality_indicators
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Сведения об упаковке товара</v-list-item-title>
            <v-list-item-subtitle>{{
              order.information_about_the_product_packaging
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Сведения о маркировке товара</v-list-item-title>
            <v-list-item-subtitle>{{
              order.information_about_the_product_labeling
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
            <v-list-item-title>Ставка НДС</v-list-item-title>
            <v-list-item-subtitle>{{ order.VAT }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Колличество</v-list-item-title>
            <v-list-item-subtitle>{{ order.nuber_of }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Местонахождение</v-list-item-title>
            <v-list-item-subtitle>{{ order.cost }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Условия поставки</v-list-item-title>
            <v-list-item-subtitle>{{ order.location }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Сроки поставки</v-list-item-title>
            <v-list-item-subtitle>{{
              order.payment_terms
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Условия поставки</v-list-item-title>
            <v-list-item-subtitle>{{
              order.delivery_time
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Группа товаров/услуг</v-list-item-title>
            <v-list-item-subtitle>{{
              order.terms_of_delivery
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn plain small color="grey" router to="/dashboard"
        ><v-icon class="mr-2">mdi-arrow-left</v-icon>Назад</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn small color="success">Купить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: "Заявки на покупку",
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