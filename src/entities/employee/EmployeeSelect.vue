<template>
  <select v-model="selectedEmployee" :disabled="!employees.length">
    <option value="" disabled>Выберите сотрудника</option>
    <option v-for="employee in employees" :key="employee" :value="employee">{{ employee }}</option>
  </select>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useEmployeeStore } from '@/entities/employee/employeeStore';

export default defineComponent({
  setup() {
    const employeeStore = useEmployeeStore();
    const employees = computed(() => employeeStore.employees);
    const selectedEmployee = computed({
      get: () => employeeStore.selectedEmployee,
      set: (value) => employeeStore.setEmployee(value),
    });

    return { employees, selectedEmployee };
  },
});
</script>
