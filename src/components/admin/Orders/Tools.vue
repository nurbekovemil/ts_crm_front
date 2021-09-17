<template>
    <v-card-actions>        
        <v-spacer></v-spacer>
        <!-- private template for admin -->
        <template v-if="GET_USER.role === 'ADMIN'">
            <template v-if="GET_ORDER_VIEW.status === 1">
                <v-btn 
                    text 
                    color="orange darken-1"
                    @click="confirmOrReject(GET_ORDER_VIEW.id, 4)"
                    >
                    Отклонить
                </v-btn>
                <v-btn 
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(GET_ORDER_VIEW.id, 2)"
                    >
                    Принять
                </v-btn>
            </template>
        </template>

        <template v-if="GET_USER.role === 'USER'">
            <template v-if="GET_ORDER_VIEW.status === 4">
                <v-btn 
                    small
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(GET_ORDER_VIEW.id, 1)"
                    >
                    Повторно отправить
                </v-btn>
            </template>
        </template>
        
        <!-- private template -->
        <v-btn
            v-if="!GET_ORDER_VIEW.own"
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
        ...mapGetters(["GET_ORDER_VIEW", "GET_USER"]),
    },
    methods: {
        ...mapMutations(["SET_IS_ADD_OFFER_DIALOG"]),
        ...mapActions(["UPDATE_ORDER_STATUS"]),
        openIsAddOfferDialog() {
            this.SET_IS_ADD_OFFER_DIALOG();
        },
        confirmOrReject(order_id, status){
            this.UPDATE_ORDER_STATUS({order_id, status})
        }
    },
};
</script>

<style>
</style>