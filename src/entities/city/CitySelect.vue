<template>
  <select v-model="selectedCity" @change="handleChange">
    <option value="" disabled>Выберите город</option>
    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
  </select>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useCityStore } from '@/entities/city/cityStore';

export default defineComponent({
  setup() {
    const cityStore = useCityStore();
    const cities = computed(() => cityStore.cities);
    const selectedCity = computed({
      get: () => cityStore.selectedCity,
      set: (value) => cityStore.setCity(value),
    });

    const handleChange = () => {
      cityStore.setCity(selectedCity.value);
    };

    return { cities, selectedCity, handleChange };
  },
});
</script>
