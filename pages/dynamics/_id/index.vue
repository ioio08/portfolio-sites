<template>
  <SitePreview :contents="dynamics"/>
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
