<template>
  <v-card>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left" width="10%">Тип перевода</th>
              <th class="text-left">Дата</th>
              <th class="text-left">Статус</th>
              <th class="text-left">
                <v-icon> mdi-tray-arrow-up </v-icon>
              </th>
              <th class="text-left">
                <v-icon> mdi-tray-arrow-down </v-icon>
              </th>
              <th class="text-left">Сумма</th>
              <th class="text-left" width="10%"></th>
            </tr>
          </thead>
          <tbody>
            <template v-if="transaction_list.length > 0">
              <tr v-for="list in transaction_list" :key="list.id">
                <td>{{ list.id }}</td>
                <td>{{ list.type_title }}</td>
                <td>{{ list.created_at }}</td>
                <td>
                  <v-chip small :color="list.status_color" text-color="white">
                    {{ list.status_title }}
                  </v-chip>
                </td>
                <td>{{ list.user_from_name }}</td>
                <td>{{ list.user_to_name }}</td>
                <td
                  :class="
                    list.type == 1 || list.type == 3
                      ? 'green--text'
                      : 'error--text'
                  "
                >
                  {{ list.type == 1 || list.type == 3 ? "+" : "-"
                  }}{{ list.amount }} сом
                </td>
                <td>
                  <div
                    v-if="list.status == 1 && user.role == 'CD'"
                    class="d-flex"
                  >
                    <v-spacer />
                    <v-btn
                      color="orange"
                      icon
                      dark
                      @click="statusUpdate(list.id, 3)"
                    >
                      <v-icon dark> mdi-arrow-u-left-top</v-icon>
                    </v-btn>
                    <v-btn
                      color="green"
                      icon
                      dark
                      @click="statusUpdate(list.id, 2)"
                    >
                      <v-icon dark> mdi-check </v-icon>
                    </v-btn>
                  </div>
                  <div
                    v-if="list.status == 2 || list.status == 3"
                    class="d-flex"
                  >
                    <v-spacer />
                    <v-tooltip left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                          router
                          :to="`/dashboard/transactions/${list.id}`"
                        >
                          <v-icon dark> mdi-receipt-text </v-icon>
                        </v-btn>
                      </template>
                      <span>Квитанция</span>
                    </v-tooltip>
                  </div>
                </td>
              </tr>
            </template>
            <template v-else>
              <td colspan="10" class="text-center py-2 text--disabled">
                Не найдено!
              </td>
            </template>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user"]),
    ...mapState("transaction", ["transaction_list"]),
  },
  methods: {
    ...mapActions("transaction", [
      "GET_TRANSACTION_LIST",
      "UPDATE_TRANSACTION_STATUS",
    ]),
    statusUpdate(id, status) {
      this.UPDATE_TRANSACTION_STATUS({ id, status });
    },
  },
  mounted() {
    this.GET_TRANSACTION_LIST();
  },
};
</script>


<style>
</style>