<template>
  <v-card class="mt-2 px-2" width="100%" elevation="0">
    <v-row>
      <v-col>
        <!-- Название товара -->
        <v-card-title>{{ order.title }}</v-card-title>
        <!-- Название страницы -->
        <template v-if="order.own">
          <v-card-subtitle class="pb-0">
            Ваша • {{ order.order_type_title }}
          </v-card-subtitle>
        </template>

        <template v-else>
          <v-card-subtitle class="pb-0">
            {{ order.order_type_title }}
          </v-card-subtitle>
        </template>
        <v-card-subtitle class="text-caption py-0">
          Создано
          {{ order.created_at }}
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-row class="ma-2 d-flex" style="align-items: center">
      <v-col md="4" v-if="order.status != 8">
        <v-card>
          <v-carousel
            cycle
            data-fancybox
            show-arrows-on-hover
            hide-delimiters
            style="height: 300px"
          >
            <v-carousel-item
              v-for="(img, i) in order.images"
              :key="i"
              :src="
                img != null
                  ? `${url_api}/${img.path}`
                  : `${url_api}/static/images/default.png`
              "
              style="box-sizing: border-box"
            />
          </v-carousel>
        </v-card>
      </v-col>
      <v-col>
        <!-- Детали товара -->
        <v-simple-table>
          <template class="hhh">
            <tbody>
              <tr class="text-caption">
                <td class="text-h6">Цена</td>
                <td class="text-h6 font-weight-bold">
                  {{ order.price }} {{ order.currency_symbol }}
                </td>
              </tr>
              <tr class="text-caption">
                <td class="grey--text">
                  {{ $t(`admin.order.order_view.amount`) }}:
                </td>
                <td>{{ order.amount }} / {{ order.weight }}</td>
              </tr>
              <tr class="text-caption">
                <td class="grey--text">
                  {{ $t(`admin.order.order_view.cost`) }}:
                </td>
                <td>{{ order.cost }} {{ order.currency_symbol }}</td>
              </tr>
              <tr class="text-caption">
                <td class="grey--text">
                  {{ $t(`admin.order.order_view.delivery`) }}:
                </td>
                <td>{{ order.delivery }}</td>
              </tr>
              <tr class="text-caption">
                <td class="grey--text">
                  {{ $t(`admin.order.order_view.payment`) }}:
                </td>
                <td>{{ order.payment }}</td>
              </tr>
              <tr class="text-caption">
                <td class="grey--text">
                  {{ $t(`admin.order.order_view.cd`) }}:
                </td>
                <td>{{ order.cd ? "Да" : "Нет" }}</td>
              </tr>
              <template v-if="order.is_auction">
                <tr class="text-caption">
                  <td class="grey--text">Дата начала и завершения аукциона</td>
                  <td :class="order.auction ? 'green--text' : 'warning--text'">
                    {{ order.auction_date_start }} /
                    {{ order.auction_date_end }}
                  </td>
                </tr>
                <tr class="text-caption">
                  <td class="grey--text">Время начала и завершения аукциона</td>
                  <td :class="order.auction ? 'green--text' : 'warning--text'">
                    {{ order.auction_time_start }} /
                    {{ order.auction_time_end }}
                  </td>
                </tr>
              </template>
              <v-col v-if="!$route.meta.hideOrderTools">
                <tools />
              </v-col>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="order.status != 8">
        <v-tabs v-model="tab" left>
          <v-tab v-for="item in itemsTab" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-row>
              <offer-history />
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col>
                <p>
                  {{ order.description }}
                </p>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col md="12">
                <v-simple-table class="rt">
                  <tbody>
                    <tr>
                      <td>Категория</td>
                      <td>{{ order.category }}</td>
                    </tr>
                    <tr>
                      <td>НДС</td>
                      <td>{{ order.nds }} %</td>
                    </tr>
                    <!-- <tr>
                      <td>ГОСТ</td>
                      <td>{{ order.gost }}</td>
                    </tr> -->
                    <tr>
                      <td>Залоги и гарантия</td>
                      <td>{{ order.warranty }}</td>
                    </tr>

                    <tr>
                      <td>Особые условия</td>
                      <td>{{ order.special_conditions }}</td>
                    </tr>

                    <tr>
                      <td>Страна</td>
                      <td>{{ order.country }}</td>
                    </tr>

                    <tr>
                      <td>Местонахождение товара</td>
                      <td>{{ order.product_location }}</td>
                    </tr>
                    <tr>
                      <td>КОД ТН ВЭД</td>
                      <td>{{ order.code_tnved }}</td>
                    </tr>
                    <tr>
                      <td>ЛОТ</td>
                      <td>{{ order.lot }}</td>
                    </tr>
                    <tr>
                      <td>Маркировка товара</td>
                      <td>{{ order.marking }}</td>
                    </tr>
                    <tr>
                      <td>Срок оплаты</td>
                      <td>{{ order.payment_date }}</td>
                    </tr>
                    <tr>
                      <td>Срок поставки</td>
                      <td>{{ order.delivery_date }}</td>
                    </tr>
                    <tr>
                      <td>Качественные показатели товара</td>
                      <td>{{ order.quality }}</td>
                    </tr>
                    <tr v-if="order.cert">
                      <td>Сертификат</td>
                      <td>
                        <template v-for="(cert, i) in order.cert">
                          <a
                            v-if="cert != null"
                            :href="`${url_api}/${cert.path}`"
                            :key="i"
                            target="_blank"
                            >Посмотреть</a
                          >
                        </template>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
    <offer style="margin-top: 30px" />
  </v-card>
</template>

<script>
import OfferHistory from "../Deals/OfferHistory.vue";
import Offer from "./Offer.vue";
import Tools from "./Tools.vue";
export default {
  props: ["order"],
  data: () => ({
    url_api: process.env.VUE_APP_BACK_API,
    tab: null,
    itemsTab: [
      "История предложений",
      "Описание товара",
      "Подробная информация о товаре",
    ],
  }),

  components: { Tools, Offer, OfferHistory },
};
</script>

<style scoped></style>