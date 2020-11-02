<template>
  <v-content>
    <router-view class="content" />
    <dashboard-core-footer />
  </v-content>
</template>
<style scoped>
  .content {
  }
</style>
<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>
