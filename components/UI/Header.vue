<template>
  <div>
    <v-app-bar
      fixed
      app
    >
    <v-spacer></v-spacer>
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
    <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>


export default {
  data () {
    return {
      clipped: false,
      sidebars: {
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
      },
      title: 'My-Portfolio-Site'
    }
  }
}
</script>

<style lang="scss" scoped>

.v-toolbar__title {
  font-size: 25px;
  margin-right: 50px;

  &:hover {
    background: rgb(175, 175, 175);
    transition: .2s;
    padding: 10px 15px;
    border-radius: 20px ;
  }

}
.v-application a{
  text-decoration: none;
  color: rgb(20, 20, 20);
}
</style>