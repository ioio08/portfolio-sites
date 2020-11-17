<template>
  <SiteList :contents="statics">
    <template v-slot:title>静的サイト</template>
    <template v-slot:topApp>
      <nuxt-link to="/statics/1">
        <v-card hover style="margin-top:20px;">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="5" lg="5">
                <v-card-text>
                  <v-img src="/images/statics/FV-code.png"></v-img>
                </v-card-text>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="6" lg="6">
                <transition name="fade">
                  <v-card-title><h3>オリジナルサイト</h3></v-card-title>
                </transition>
                <transition name="fade">
                  <v-card-text >
                    <h3>FV-Code</h3>
                  </v-card-text>
                </transition>
                <v-card-text>
                  <p>服飾に興味があり作成しました。<br>装うという行為に焦点を当て、多様な角度からその価値に対する個人的な意見を発信する為のサイトレイアウトを作成しました。<br> </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </nuxt-link>
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
      ...mapState(["statics"])
    },
  }
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>