<template>
  <v-app>
    <!-- <v-tabs>
    <v-tab @click="clients">Clients</v-tab>
    <v-tab>Employees</v-tab>
    <v-tab>Engagements</v-tab>
  </v-tabs> -->
    <page-header />
    <v-main>
      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
//import Communivation from './services/Communivation'
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    PageHeader,
  },

  data: () => ({
    //
  }),
  
};
</script>
