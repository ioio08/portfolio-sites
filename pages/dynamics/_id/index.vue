<template>
  <SitePreview :contents="dynamics">
    <template v-slot:functions>
      <v-divider></v-divider>
      <v-card-subtitle>機能</v-card-subtitle>
      <v-card-text>
        <v-sheet v-for="(functions, i) in dynamics.functions" :key="i"><h2 style="line-height:30px">・{{ functions }}</h2> </v-sheet>
      </v-card-text>
    </template>
  </SitePreview>
</template>

<script>
import SitePreview from '@/components/Sites/SitePreview'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getDynamicsData']),
    dynamics() {
      return this.getDynamicsData(this.$route.params.id);
    },
  },
}
</script>
