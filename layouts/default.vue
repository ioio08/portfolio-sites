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
  props: {
    Header
  }

}
</script>

<style lang="scss" scoped>

.container {
  max-width: 1024px;
}


</style>