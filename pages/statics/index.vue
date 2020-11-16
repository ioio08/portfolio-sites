<template>
  <SiteList :contents="statics">
    <template v-slot:title>静的サイト</template>
  </SiteList>
</template>

<script>
  import SiteList from '@/components/Sites/SiteList'
  import { mapState } from 'vuex'

  export default {
    components: {
      SiteList,
    },
    computed: {
      ...mapState(["statics"])
    },
  }
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>