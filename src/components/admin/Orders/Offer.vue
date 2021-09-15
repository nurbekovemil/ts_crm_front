<template>
    <v-row justify="center">
        <v-dialog v-model="GET_IS_OFFER_DIALOG" persistent max-width="700px">
            <v-card>
                <v-card-title>
                    Предложить
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <span class="text-h5">
                                    {{GET_ORDER_VIEW.title}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Цена: {{GET_ORDER_VIEW.price}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Количество: {{GET_ORDER_VIEW.amount}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Стоимость: {{GET_ORDER_VIEW.cost}}
                                </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-select
                                    :items="GET_MY_ORDERS(handleOrderType)"
                                    v-model="myOrderId"
                                    item-text="title"
                                    item-value="id"
                                    label="Выберите вашу заявку"
                                    dense
                                    outlined
                                    @click="loadMyOrders"
                                    ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="toggleIsAddOfferDialog">
                        Отмена
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="sendOfferOrder">
                        Отправить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    data: () => ({
        myOrderId: null
    }),
    computed: {
        ...mapGetters(['GET_IS_OFFER_DIALOG', 'GET_ORDER_VIEW', 'GET_MY_ORDERS']),
        handleOrderType(){
            return this.GET_ORDER_VIEW.order_type == 1 ? 2 : 1
        }
    },
    methods: {
        ...mapActions(['MY_ORDER_LIST','SEND_OFFER_ORDER']),
        ...mapMutations(['SET_IS_ADD_OFFER_DIALOG']),
        toggleIsAddOfferDialog(){
            this.SET_IS_ADD_OFFER_DIALOG()
        },
        loadMyOrders(){
            this.MY_ORDER_LIST(this.handleOrderType)
        },
        sendOfferOrder(){
            const offer = {
                user_to: this.GET_ORDER_VIEW.user_id,
                order_from: this.myOrderId,
                order_to: this.GET_ORDER_VIEW.id
            }
            this.SEND_OFFER_ORDER(offer)
        }
    }
};
</script>