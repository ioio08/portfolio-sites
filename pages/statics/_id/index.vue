<template>
  <SitePreview :contents="statics"/>
</template>

<script>
import SitePreview from '@/components/Sites/SitePreview'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getStaticsData']),
    statics() {
      return this.getStaticsData(this.$route.params.id);
    },
  },
}
</script>
