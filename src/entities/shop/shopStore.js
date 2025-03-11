import { defineStore } from 'pinia';
import { useCityStore } from '@/entities/city/cityStore';

export const useShopStore = defineStore('shop', {
  state: () => ({
    allShops: {
      Москва: ['Цех 1', 'Цех 2'],
      'Санкт-Петербург': ['Цех 3', 'Цех 4'],
      Казань: ['Цех 5'],
    },
    selectedShop: '',
  }),
  getters: {
    shops(state) {
      const cityStore = useCityStore();
      return state.allShops[cityStore.selectedCity] || [];
    },
  },
  actions: {
    setShop(shop) {
      this.selectedShop = shop;
    },
  },
});
