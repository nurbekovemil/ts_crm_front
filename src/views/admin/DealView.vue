<template>
	<div>
		<deal :deal="deal_view"/>
		<tools :deal="deal_view"/>
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Deal from "@/components/admin/Deals/Deal";
import Tools from '../../components/admin/Deals/Tools.vue';
export default {
	components: {
		Deal,
		Tools
	},
	computed: {
		...mapState("deal", ["deal_view"]),
	},
	methods: {
		...mapActions("deal", ["GET_DEAL_BY_ID"]),
	},
	mounted() {
		this.GET_DEAL_BY_ID(this.$route.params.id)
	},
};
</script>

<style></style>
