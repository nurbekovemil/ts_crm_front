<template>
    <v-card-actions>        
        <v-spacer></v-spacer>
        <!-- private template for admin -->
        <template v-if="user.role === 'ADMIN'">
            <template v-if="order_view.status === 1">
                <v-btn 
                    text 
                    color="orange darken-1"
                    @click="confirmOrReject(order_view.id, 4)"
                    >
                    Отклонить
                </v-btn>
                <v-btn 
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(order_view.id, 2)"
                    >
                    Принять
                </v-btn>
            </template>
        </template>

        <template v-if="user.role === 'USER'">
            <template v-if="order_view.status === 4">
                <v-btn 
                    small
                    color="green darken-1" 
                    dark
                    @click="confirmOrReject(order_view.id, 1)"
                    >
                    Повторно отправить
                </v-btn>
            </template>
        </template>
        
        <!-- private template -->
        <v-btn
            v-if="!order_view.own"
            small
            color="success"
            @click="openIsAddOfferDialog"
            >Предложить</v-btn
        >
    </v-card-actions>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState('user',['user']),
        ...mapState('order',['order_view'])
    },
    methods: {
        ...mapMutations('deal',['SET_IS_ADD_DEAL_DIALOG']),
        ...mapActions('order',['UPDATE_ORDER_STATUS']),
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