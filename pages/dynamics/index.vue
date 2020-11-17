<template>
  <SiteList :contents="dynamics" >
    <template v-slot:title>アプリ</template>
    <template v-slot:topApp>
      <nuxt-link to="/dynamics/1">
        <v-card hover style="margin-top:20px;">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="5" lg="5">
                <v-card-text>
                  <v-img src="/images/dynamics/SlideShow.png"></v-img>
                </v-card-text>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="6" lg="6">
                <transition name="fade">
                  <v-card-title><h3 >Mono-Que</h3> </v-card-title>
                </transition>
                <transition name="fade">
                  <v-card-text >
                    <h3 >モノと対話するように</h3>
                  </v-card-text>
                </transition>
                <v-card-text>
                  <p >身近なモノ、気になるモノ、手放そうとするモノ。<br>そんなモノタチと少しの時間だけでも、対話するように接してみて欲しくて制作しました。 </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </nuxt-link>
    </template>
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