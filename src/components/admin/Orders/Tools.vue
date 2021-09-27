<template>
    <v-card-actions>        
        <v-spacer></v-spacer>
        <!-- private template for admin -->
        <template v-if="GET_USER.role === 'ADMIN'">
            <template v-if="getOrderView.status === 1">
                <v-btn 
                    text 
                    color="orange darken-1"
                    @click="confirmOrReject(getOrderView.id, 4)"
                    >
                    Отклонить
                </v-btn>
                <v-btn 
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(getOrderView.id, 2)"
                    >
                    Принять
                </v-btn>
            </template>
        </template>

        <template v-if="GET_USER.role === 'USER'">
            <template v-if="getOrderView.status === 4">
                <v-btn 
                    small
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(getOrderView.id, 1)"
                    >
                    Повторно отправить
                </v-btn>
            </template>
        </template>
        
        <!-- private template -->
        <v-btn
            v-if="!getOrderView.own"
            small
            color="success"
            @click="openIsAddOfferDialog"
            >Предложить</v-btn
        >
    </v-card-actions>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {

    computed: {
        ...mapGetters(["getOrderView", "GET_USER"]),
    },
    methods: {
        ...mapMutations(["SET_IS_ADD_DEAL_DIALOG"]),
        ...mapActions(["UPDATE_ORDER_STATUS"]),
        openIsAddOfferDialog() {
            this.SET_IS_ADD_DEAL_DIALOG();
        },
        confirmOrReject(order_id, status){
            this.UPDATE_ORDER_STATUS({order_id, status})
        }
    },
};
</script>

<style>
</style>