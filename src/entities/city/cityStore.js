import { defineStore } from 'pinia';

export const useCityStore = defineStore('city', {
  state: () => ({
    cities: ['Москва', 'Санкт-Петербург', 'Казань'],
    selectedCity: '',
  }),
  actions: {
    setCity(city) {
      this.selectedCity = city;
    },
  },
});
