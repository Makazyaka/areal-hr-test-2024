<template>
    <q-page>
      <h1>Организации</h1>
      <p>Тут будет работа с организациями.</p>
      <q-btn label="Вернуться назад" color="primary" @click="$router.push({ name: 'intro' })" />
    </q-page>
  </template>
  
  <script>
  export default {
    name: "OrganizationsPage",
  };
  </script>