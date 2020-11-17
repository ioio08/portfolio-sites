<template>
  <v-navigation-drawer
    v-model="sidebars.drawer"
    :mini-variant="sidebars.miniVariant"
    :clipped="sidebars.clipped"
    fixed
    app
  >
    <v-list>
      <v-app-bar-nav-icon @click.stop="sidebars.drawer = !sidebars.drawer" />
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props:['sidebars'],
  computed: {
    ...mapState(['items'])
  },

}
</script>

<style lang="scss" scoped>

</style>