<template>
  <form @submit.prevent="handleSubmit">
    <label for="city">Город:</label>
    <CitySelect v-model="cityStore.selectedCity" />

    <label for="shop">Цех:</label>
    <ShopSelect v-model="shopStore.selectedShop" />

    <label for="employee">Сотрудник:</label>
    <EmployeeSelect v-model="employeeStore.selectedEmployee" />

    <label for="team">Бригада:</label>
    <TeamSelect v-model="teamStore.selectedTeam" />

    <label for="shift">Смена:</label>
    <ShiftSelect v-model="shiftStore.selectedShift" />

    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import CitySelect from '@/entities/city/CitySelect.vue';
import ShopSelect from '@/entities/shop/ShopSelect.vue';
import EmployeeSelect from '@/entities/employee/EmployeeSelect.vue';
import TeamSelect from '@/entities/team/TeamSelect.vue';
import ShiftSelect from '@/entities/shift/ShiftSelect.vue';
import { useCityStore } from '@/entities/city/cityStore';
import { useShopStore } from '@/entities/shop/shopStore';
import { useEmployeeStore } from '@/entities/employee/employeeStore';
import { useTeamStore } from '@/entities/team/teamStore';
import { useShiftStore } from '@/entities/shift/shiftStore';

export default defineComponent({
  components: {
    CitySelect,
    ShopSelect,
    EmployeeSelect,
    TeamSelect,
    ShiftSelect,
  },
  setup() {
    const router = useRouter();
    const cityStore = useCityStore();
    const shopStore = useShopStore();
    const employeeStore = useEmployeeStore();
    const teamStore = useTeamStore();
    const shiftStore = useShiftStore();

    const handleSubmit = () => {
      router.push({
        name: 'result',
        query: {
          city: cityStore.selectedCity,
          shop: shopStore.selectedShop,
          employee: employeeStore.selectedEmployee,
          team: teamStore.selectedTeam,
          shift: shiftStore.selectedShift,
        },
      });
    };

    return {
      handleSubmit,
      cityStore,
      shopStore,
      employeeStore,
      teamStore,
      shiftStore,
    };
  },
});
</script>
