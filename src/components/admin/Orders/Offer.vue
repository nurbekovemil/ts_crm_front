<template>
    <v-row justify="center">
        <v-dialog v-model="getIsDealDialog" persistent max-width="700px">
            <v-card>
                <v-card-title>
                    Предложить
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <span class="text-h5">
                                    {{getOrderView.title}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Цена: {{getOrderView.price}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Количество: {{getOrderView.amount}}
                                </span>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <span class="subtitle-1">
                                    Стоимость: {{getOrderView.cost}}
                                </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="12">
                                <v-select
                                    :items="getMyOrders(handleOrderType)"
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
                    <v-btn color="blue darken-1" text @click="closeIsAddDealDialog">
                        Отмена
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="createDeal">
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
        ...mapGetters(['getIsDealDialog', 'getOrderView', 'getMyOrders']),
        handleOrderType(){
            return this.getOrderView.order_type == 1 ? 2 : 1
        }
    },
    methods: {
        ...mapActions(['MY_ORDER_LIST','CREATE_DEAL']),
        ...mapMutations(['SET_IS_ADD_DEAL_DIALOG']),
        closeIsAddDealDialog(){
            this.SET_IS_ADD_DEAL_DIALOG()
        },
        loadMyOrders(){
            this.MY_ORDER_LIST(this.handleOrderType)
        },
        createDeal(){
            const offer = {
                user_to: this.getOrderView.user_id,
                order_from: this.myOrderId,
                order_to: this.getOrderView.id
            }
            this.CREATE_DEAL(offer)
        }
    }
};
</script>