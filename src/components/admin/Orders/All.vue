<template lang="">
	<div>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left" width="40%">
							Название
						</th>
						<template v-if="user.role == 'ADMIN'">
							<th>
							Пользователь

							</th>
						</template>
						<th class="text-left">
							Статус
						</th>
						<th class="text-left">
							Дата
						</th>
						<th class="text-left">
							Цена
						</th>
						<th class="text-left">
							Количество
						</th>
						<th class="text-left">
							Стоимость
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(order, i) of order_list.rows" :key="i">

						<td>
							<v-btn
								rounded
								plain
								small
								color="primary"
								@click="viewOrder(order.id)"
							>
								{{ order.title }}
							</v-btn>
						</td>
							<template v-if="user.role == 'ADMIN'">
  <td>
    <v-btn
      rounded
      plain
      small
      color="primary"
      router
      :to="`/dashboard/user/${order.user_id}`"
    >
      {{ order.username }}
    </v-btn>
  </td>
</template>

						<td>
							<v-chip small :color="order.status_color" text-color="white">
									{{ order.status }}
							</v-chip>
						</td>
						<td>{{ order.created_at }}</td>
						<td>{{ order.price }} {{order.symbol}}</td>
						<td>{{ order.amount }} / {{order.weight_title}}</td>
						<td>{{ order.cost }} {{order.symbol}}</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<v-pagination
				v-if="order_list.count > limit"
        v-model="page"
        :length="order_count"
        color="#78C3CC"
        app
      ></v-pagination>
	</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["status"],
  data: () => ({
    page: 1,
    limit: 10,
  }),
  mounted() {
    this.ALL_ORDER_LIST({ page: this.page, limit: this.limit });
  },
  computed: {
    ...mapState("order", ["order_list"]),
    ...mapState("user", ["user"]),
    order_count() {
      return Math.ceil(this.order_list.count / this.limit);
    },
  },
  methods: {
    ...mapActions("order", ["ALL_ORDER_LIST"]),
    viewOrder(id) {
      this.$router.push({ path: `/dashboard/order/${id}` });
    },
  },
  watch: {
    page(v) {
      this.ALL_ORDER_LIST({ page: v, limit: this.limit });
    },
  },
};
</script>
<style lang=""></style>
