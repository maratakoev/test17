<template>
  <select v-model="selectedShop" @change="handleChange" :disabled="!shops.length">
    <option value="" disabled>Выберите цех</option>
    <option v-for="shop in shops" :key="shop" :value="shop">{{ shop }}</option>
  </select>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useShopStore } from '@/entities/shop/shopStore';

export default defineComponent({
  setup() {
    const shopStore = useShopStore();
    const shops = computed(() => shopStore.shops);
    const selectedShop = computed({
      get: () => shopStore.selectedShop,
      set: (value) => shopStore.setShop(value),
    });

    const handleChange = () => {
      shopStore.setShop(selectedShop.value);
    };

    return { shops, selectedShop, handleChange };
  },
});
</script>
