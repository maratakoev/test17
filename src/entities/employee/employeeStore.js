import { defineStore } from 'pinia';
import { useShopStore } from '@/entities/shop/shopStore';

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    allEmployees: {
      'Цех 1': ['Иван', 'Петр'],
      'Цех 2': ['Алексей', 'Сергей'],
      'Цех 3': ['Дмитрий'],
      'Цех 4': ['Анна', 'Екатерина'],
      'Цех 5': ['Олег'],
    },
    selectedEmployee: '',
  }),
  getters: {
    employees(state) {
      const shopStore = useShopStore();
      return state.allEmployees[shopStore.selectedShop] || [];
    },
  },
  actions: {
    setEmployee(employee) {
      this.selectedEmployee = employee;
    },
  },
});
