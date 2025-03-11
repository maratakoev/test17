<template>
  <select v-model="selectedTeam">
    <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
  </select>
</template>

<script>
import { defineComponent } from 'vue';
import { useTeamStore } from '@/entities/team/teamStore';

export default defineComponent({
  setup() {
    const teamStore = useTeamStore();
    const teams = teamStore.teams;
    const selectedTeam = teamStore.selectedTeam;

    return { teams, selectedTeam };
  },
});
</script>
