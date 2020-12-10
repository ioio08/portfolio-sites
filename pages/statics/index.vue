<template>
  <SiteList :contents="statics">
    <template v-slot:title>静的サイト</template>
    <template v-slot:topApp>
      <nuxt-link to="/statics/0">
        <v-card hover style="margin-top:20px;">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="5" lg="5">
                <v-card-text>
                  <v-img src="/images/statics/Profile.png"></v-img>
                </v-card-text>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="6" md="6" lg="6">
                <v-card-text >
                  <h1>Profile</h1>
                </v-card-text>
                <v-card-text>
                  <h3>履歴書には書ききれない個人的な趣味や過去の実績について掲載しています。<br>
                  StyleにSCSSを採用して工夫した点は大きく３点あります。<br>
                  1:マジックコードを避ける。<br>
                  2:レスポンシブ対応<br>
                  3:BEM記法に基づいた設計 </h3>
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