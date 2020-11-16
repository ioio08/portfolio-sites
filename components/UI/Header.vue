<template>
  <div>
    <Sidebar
    :clipped="clipped"
    :drawer="drawer"
    :mini-variant="miniVariant"
    />
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
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar'


export default {
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