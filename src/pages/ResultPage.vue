<template>
  <div>
    <h1>Результат</h1>
    <p>Город: {{ city }}</p>
    <p>Цех: {{ shop }}</p>
    <p>Сотрудник: {{ employee }}</p>
    <p>Бригада: {{ team }}</p>
    <p>Смена: {{ shift }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';  // Импорт useRoute

export default defineComponent({
  setup() {
    const route = useRoute();  // Получение данных из маршрута

    const city = route.query.city;
    const shop = route.query.shop;
    const employee = route.query.employee;
    const team = route.query.team;
    const shift = route.query.shift;

    return {
      city,
      shop,
      employee,
      team,
      shift,
    };
  },
});
</script>
