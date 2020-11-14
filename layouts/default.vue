<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <transition name="page">
          <nuxt />
        </transition>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["items"])
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'My-Portfolio-Site'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-size: 25px;
  margin-right: 50px;

}
.v-application a{
  text-decoration: none;
  color: rgb(20, 20, 20);
}
</style>