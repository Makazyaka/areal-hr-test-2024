<template>
    <q-page class="q-pa-md row justify-center items-center">
      <!-- Центральный квадрат -->
      <q-card
        class="q-pa-lg bg-grey-1"
        style="width: 400px; border-radius: 12px; text-align: center;"
      >
        <q-banner dense class="bg-primary text-white q-mb-md">
          <div class="text-h6">Добро пожаловать в систему учета сотрудников!</div>
        </q-banner>
        <div>
          <p>Эта система предназначена для управления сотрудниками, должностями, отделами и другими аспектами кадрового учета.</p>
          <p>Используйте кнопки справа для перехода в нужные разделы.</p>
        </div>
      </q-card>
  
      <!-- Панель с кнопками -->
      <div class="q-pa-md row items-start q-ml-md" style="flex-direction: column;">
        <q-btn
          label="Организации"
          color="primary"
          class="q-mb-md"
          style="width: 200px;"
          @click="goToPage('organizations')"
        />
        <!-- Добавляй другие кнопки по мере необходимости -->
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: "IntroPage",
    methods: {
      goToPage(page) {
        this.$router.push({ name: page });
      },
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }
  </style>