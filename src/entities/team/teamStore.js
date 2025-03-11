import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    teams: [
      { id: 1, name: 'Team 1' },
      { id: 2, name: 'Team 2' },
    ],
    selectedTeam: null,
  }),
  actions: {
    setSelectedTeam(teamId) {
      this.selectedTeam = teamId;
    },
  },
});
