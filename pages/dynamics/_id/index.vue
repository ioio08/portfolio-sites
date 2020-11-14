<template>
  <v-card>
    <v-card-title>サイトについて</v-card-title>
    <v-divider></v-divider>
    <v-container style="padding-top:0;">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6">
          <v-card-title><h2>{{ dynamics.title }} </h2> </v-card-title>
          <v-img style="width:700px" :src="dynamics.img"></v-img>
          <v-card-actions style="justify-content:flex-end">
             <fa :icon="faGithub" />
            <v-btn :href="dynamics.to">リンク</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title>サイト詳細</v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>使用言語</v-card-subtitle>
          <v-card-text>
            <v-row justify="center">
              <v-col
              cols="12"
              sm="2"
              v-for="lang in dynamics.useLangs"
              :key="lang.icon"
              >
                <v-img :style="lang.width" :src="lang.icon"></v-img>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-subtitle>出来る事</v-card-subtitle>
          <v-card-text>
            <v-sheet></v-sheet>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

  export default {
    computed: {
      ...mapGetters(['getDynamicsData']),
      dynamics: function () {
        return this.getDynamicsData(this.$route.params.id);
      },
      fas () {
        return fas
      },
      faGithub () {
        return faGithub
      }
    },
  }
</script>
