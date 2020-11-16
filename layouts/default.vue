<template>
  <v-app >
    <Header/>

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
import Header from '@/components/UI/Header'

export default {

}
</script>

<style lang="scss" scoped>


</style>