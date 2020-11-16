<template>
  <SiteList :contents="dynamics" >
    <template v-slot:title>アプリ</template>
    <template v-slot:keyApp>
      <v-col cols="12" sm="6" >
          <nuxt-link :to="dynamics[7].link + dynamics[7].id">
            <v-card hover>
              <v-card-subtitle>{{ dynamics[7].title }} </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>
                <v-img :src="dynamics[7].img"></v-img>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-subtitle style="padding-bottom:0;">使用言語</v-card-subtitle>
              <v-card-text  style="padding-bottom:0;">
                <v-row justify="center">
                  <v-col cols="12" sm="2" v-for="lang in dynamics[7].useLangs" :key="lang.icon">
                    <v-img :style="lang.width" :src="lang.icon"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </nuxt-link>
        </v-col>
        <v-spacer></v-spacer>

    </template>
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
    ...mapState(["dynamics"])
  },

}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>