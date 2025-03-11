import { defineStore } from 'pinia';

export const useShiftStore = defineStore('shift', {
  state: () => ({
    shifts: [
      { id: 1, name: 'Shift 1' },
      { id: 2, name: 'Shift 2' },
    ],
    selectedShift: null,
  }),
  actions: {
    setSelectedShift(shiftId) {
      this.selectedShift = shiftId;
    },
  },
});
