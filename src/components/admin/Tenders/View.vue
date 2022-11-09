<template>
  <v-card>
    <v-card-title>
      {{ tender.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ tender.info[0].items[0].value }}
    </v-card-subtitle>
    <v-card-text class="pb-0">
      <v-row>
        <v-col>
          Крайний срок:
          {{ tender.deadline }}</v-col
        >
        <v-col>Город / область: {{ tender.city_title }}</v-col>
        <v-col>Категория объявления: {{ tender.category_title }}</v-col>
        <v-col
          >Прикрепленные файлы:
          {{ tender.tender_files.length }}
          <template>
            <span v-for="(file, i) in tender.tender_files" :key="file.id">
              <a
                v-if="file != null"
                :href="`${url_api}/${file.path}`"
                :key="i"
                target="_blank"
                >Файл-{{ i + 1 }}</a
              >
            </span>
          </template>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-html="tender.description" />
    <v-card-text class="grey--text">
      Опубликовано: {{ tender.created_at }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["tender"],
  data: () => ({
    url_api: process.env.VUE_APP_BACK_API,
  }),
};
</script>

<style>
</style>