<template>
  <v-row justify="center" align="center" class="home">
    <v-col cols="12" sm="6" md="6">
      <v-card hover>
        <v-container>
          <v-card-title>コンテンツサイト</v-card-title>
          <v-divider></v-divider>
          <v-row justify="center" align="center">
            <v-spacer></v-spacer>
            <v-col cols="12" sm="5" md="5"   style="margin-top:60px">
              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col
                  cols="12" sm="4"
                  v-for="markup in markups"
                  :key="markup.title"
                  >
                    <v-img :style="markup.width" :src="markup.icon"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn to="/statics">静的サイト一覧へ</v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col
                  v-for="programming in programmings"
                  :key="programming.title"
                  cols="12" sm="6">
                    <v-img :style="programming.width" :src="programming.icon"></v-img>
                  </v-col>
                  <v-col
                  v-for="baas in baas"
                  :key="baas.title"
                  cols="12" sm="6">
                    <v-img :style="baas.width" :src="baas.icon"></v-img>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn class="dynamics-btn" to="/dynamics">アプリ一覧へ</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-card hover>
        <v-container>
          <v-card-title>製作者</v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-row  justify="center" align="center">
              <v-col cols="12" sm="6">
                <v-avatar size="160">
                  <v-img src="/images/admin.jpeg"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card-subtitle>名前</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>脇田伊織</v-card-text>
                <v-card-actions>
                  <v-btn to="/admin" style="margin-top:15px">製作者ページへ</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(["markups", "programmings", "baas", "vcs"])
  },
}
</script>


<style lang="scss" scoped>
.home {
  margin-top: 10%;
}

.v-btn {
  margin: 0 0 0 8px;
}

.dynamics-btn.v-btn {
  margin: 0 0 0 20px;
}


</style>