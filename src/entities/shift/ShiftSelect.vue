<template>
  <select v-model="selectedShift">
    <option v-for="shift in shifts" :key="shift.id" :value="shift.id">{{ shift.name }}</option>
  </select>
</template>

<script>
import { defineComponent } from 'vue';
import { useShiftStore } from '@/entities/shift/shiftStore';

export default defineComponent({
  setup() {
    const shiftStore = useShiftStore();
    const shifts = shiftStore.shifts;
    const selectedShift = shiftStore.selectedShift;

    return { shifts, selectedShift };
  },
});
</script>
