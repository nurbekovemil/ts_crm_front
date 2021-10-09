<template>
  <div>
      <views :order_id="this.$route.params.id"/>
  </div>
</template>

<script>
import Views from '../../components/admin/Orders/Views.vue'

export default {
	components: { Views },
}
</script>

<style>

</style>