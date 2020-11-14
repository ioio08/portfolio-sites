<template>
  <SiteList :contents="dynamics">
    <template v-slot:title>アプリ</template>
  </SiteList>
</template>

<script>
import SiteList from '@/components/SiteList'
import { mapState } from 'vuex'

export default {
  components: {
    SiteList,
  },
  computed: {
    ...mapState(["dynamics"])
  },

}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>