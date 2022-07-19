<template lang="">
	<div>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th>#</th>
						<th class="text-left" width="40%">
							Название
						</th>
							<th  v-if="user.role == 'ADMIN'">
							Пользователь
							</th>
						<th class="text-left">
							Статус
						</th>
						<th class="text-left">
							Дата
						</th>
						<th class="text-left" width="10%">
							Цена
						</th>
						<th class="text-left">
							Количество
						</th>
						<th class="text-left" width="15%">
							Стоимость
						</th>
						<th>

						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(order, i) of order_list.rows" :key="i">
						<td>{{i+1}}</td>
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
								<td v-if="user.role == 'ADMIN'">
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

						<td>
							<v-chip small :color="order.status_color" text-color="white">
									{{ order.status }}
							</v-chip>
						</td>
						<td>{{ order.created_at }}</td>
						<td>{{ order.price }} {{order.symbol}}</td>
						<td>{{ order.amount }} / {{order.weight_title}}</td>
						<td>{{ order.cost }} {{order.symbol}}</td>
						<td v-if="user.role === 'ADMIN'">
							<v-menu offset-y transition="slide-x-transition" bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-list nav dense>
                    <template v-if="order.status_code == 2">
                      <v-hover v-slot="{ hover }">
                        <v-list-item
                          link
                          dense
                          @click="updateMyOrderStatus(order.id, 7)"
                        >
                          <v-list-item-icon>
                            <v-icon :color="`${hover && 'cyan'}`"
                              >mdi-clock-outline</v-icon
                            >
                          </v-list-item-icon>
                          <v-list-item-title> Приостановить </v-list-item-title>
                        </v-list-item>
                      </v-hover>
                    </template>
                    <template v-if="order.status_code == 7">
                      <v-hover v-slot="{ hover }">
                        <v-list-item
                          link
                          dense
                          @click="updateMyOrderStatus(order.id, 2)"
                        >
                          <v-list-item-icon>
                            <v-icon :color="`${hover && 'cyan'}`"
                              >mdi-access-point</v-icon
                            >
                          </v-list-item-icon>
                          <v-list-item-title> Открыть </v-list-item-title>
                        </v-list-item>
                      </v-hover>
                    </template>
										<template>
											<v-hover v-slot="{ hover }" >
												<v-list-item
													:disabled="order.status_code == 3"
													link
													dense
													@click="deleteOrder(order.id)"
												>
													<v-list-item-icon>
														<v-icon :color="`${hover && 'red lighten-1'}`"
															>mdi-delete</v-icon
														>
													</v-list-item-icon>
													<v-list-item-title> Удалить </v-list-item-title>
												</v-list-item>
											</v-hover>
										</template>
                  </v-list>
                </v-menu>
						</td>
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
    this.getAllOrderList();
  },
  computed: {
    ...mapState("order", ["order_list"]),
    ...mapState("user", ["user", "isAuth"]),
    order_count() {
      return Math.ceil(this.order_list.count / this.limit);
    },
  },
  methods: {
    ...mapActions("order", [
      "ALL_ORDER_LIST",
      "DELETE_ORDER",
      "UPDATE_ORDER_STATUS",
    ]),
    getAllOrderList() {
      this.ALL_ORDER_LIST({ page: this.page, limit: this.limit });
    },
    viewOrder(id) {
      this.$router.push({ path: `/dashboard/order/${id}` });
    },
    async updateMyOrderStatus(order_id, status) {
      await this.UPDATE_ORDER_STATUS({ order_id, status, isAuth: this.isAuth });
      await this.getAllOrderList();
    },
    async deleteOrder(id) {
      await this.DELETE_ORDER({ id, type: this.type });
      await this.getAllOrderList();
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
