<template>
  <v-card style="margin-top:40px">
    <v-card-title>サイトについて</v-card-title>
    <v-divider></v-divider>
    <v-container style="padding-top:0;">
      <v-row justify="center" align="start">
        <v-col cols="12" sm="6">
          <v-card-title><h2>{{ contents.title }} </h2> </v-card-title>
          <v-img style="width:700px" :src="contents.img"></v-img>
          <v-card-actions style="justify-content:flex-end">
            <fa :icon="faGithub" @click="onClickGitHub" />
            <v-btn :href="contents.to">リンク</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title>サイト詳細</v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>使用言語</v-card-subtitle>
          <v-card-text>
            <v-row justify="start">
              <v-col
              cols="12"
              sm="2"
              v-for="lang in contents.useLangs"
              :key="lang.icon"
              >
                <v-img :style="lang.width" :src="lang.icon"></v-img>
              </v-col>
            </v-row>
          </v-card-text>
          <slot name="functions"></slot>
          <v-divider></v-divider>
          <v-card-subtitle>注力ポイント</v-card-subtitle>
          <v-card-text>
            <v-sheet><h2 style="margin-bottom:10px; line-height:30px">{{ contents.point }}</h2><h3>コード詳細はGitHubで公開しています。</h3></v-sheet>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  props:['contents'],
  computed: {
    fas () {
      return fas
    },
    faGithub () {
      return faGithub
    }
  },
  methods: {
    onClickGitHub() {
      const url = this.contents.git
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-github {
  font-size:38px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    opacity: .8;
    border: 1px solid #000;
    border-radius: 50%;
  }
}

</style>