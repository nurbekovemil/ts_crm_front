<template lang="">
	<v-row>
		<v-col :cols="isViewUser ? '8' : '12'">
			<v-card>
				<v-simple-table>
					<template>
						<thead>
							<tr>
								<th width="5%"></th>
								<th class="text-left">
									Пользователь
								</th>
								<th class="text-left">
									Роль
								</th>
								<th class="text-left">
									Количество заявок
								</th>
								<th class="text-right">
									<v-btn icon @click="toggleAddUserDialog">
										<v-icon>mdi-account-plus</v-icon>
									</v-btn>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="user in usersList"
								:key="user.id"
								:class="isViewUser && isViewUser.id == user.id && 'grey lighten-3'"
							>
								<td>
									<v-avatar size="36">
										<img src="@/assets/john.jpg" />
									</v-avatar>
								</td>

								<td>
									<span :class="user.own && 'green--text text--green-2'">{{ user.username }}</span>
								</td>
								<td>{{ user.role }}</td>
								<td>{{ user.orders }}</td>
								<td class="text-right">
									<v-menu bottom left>
										<template v-slot:activator="{ on, attrs }">
											<v-btn icon v-bind="attrs" v-on="on">
												<v-icon>mdi-dots-vertical</v-icon>
											</v-btn>
										</template>

										<v-list>
											<v-list-item link dense @click="viewUser(user)">
												<v-list-item-icon>
													<v-icon>mdi-information</v-icon>
												</v-list-item-icon>
												<v-list-item-title>
													Информация
												</v-list-item-title>
											</v-list-item>

											<v-list-item
												link
												dense
												@click="toggleEditUserDialog(user)"
											>
												<v-list-item-icon>
													<v-icon>mdi-pencil</v-icon>
												</v-list-item-icon>
												<v-list-item-title>
													Редактировать
												</v-list-item-title>
											</v-list-item>

											<v-list-item link dense :disabled="user.own || user.orders != 0" @click="deleteUser(user.id)">
												<v-list-item-icon>
													<v-icon>mdi-delete</v-icon>
												</v-list-item-icon>
												<v-list-item-title>
													Удалить
												</v-list-item-title>
											</v-list-item>
										</v-list>
									</v-menu>
								</td>
							</tr>
						</tbody>
					</template>
					<AddUser
						:isAddDialog="isAddDialog"
						@toggleAddUserDialog="toggleAddUserDialog"
					/>
					<EditUser
						:updateUser="updateUser"
						@toggleEditUserDialog="toggleEditUserDialog"
					/>
				</v-simple-table>
			</v-card>
		</v-col>
		<v-col cols="4" v-if="isViewUser">
			<v-expand-x-transition>
				<info :user="isViewUser" @viewUser="viewUser" />
			</v-expand-x-transition>
		</v-col>
	</v-row>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import AddUser from "@/components/admin/Users/Add.vue";
import EditUser from "@/components/admin/Users/Edit.vue";
import Info from "@/components/admin/Users/Info.vue";
export default {
	data: () => ({
		isViewUser: null,
		updateUser: null
	}),
	components: {
		AddUser,
		EditUser,
		Info,
	},
	computed: {
		...mapState("user", ["usersList", "isAddDialog", "isEditDialog"]),
	},
	mounted() {
		this.USERLIST();
	},
	methods: {
		...mapActions("user", ["USERLIST", "DELETEUSER"]),
		...mapMutations("user", ["TOGGLE_ADD_DIALOG","TOGGLE_EDIT_DIALOG"]),
		toggleAddUserDialog() {
			this.TOGGLE_ADD_DIALOG()
		},
		toggleEditUserDialog(user) {
			if (user) {
				this.updateUser = JSON.parse(JSON.stringify(user));
			}
			this.TOGGLE_EDIT_DIALOG()
		},
		viewUser(user) {
			if (user) {
				return (this.isViewUser = user);
			}
			this.isViewUser = null;
		},
		deleteUser(id) {
			this.DELETEUSER(id);
		},
	},
};
</script>

<style lang=""></style>
