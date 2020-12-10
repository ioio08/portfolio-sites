<template>
  <v-card>
    <v-card-title>製作者について</v-card-title>
    <v-divider></v-divider>
    <v-container style="padding-top:0;">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4">
          <v-card-title>プロフィール</v-card-title>
          <v-card-text>
            <p style="padding-left:19%; margin-bottom:0; font-size:12px">わきたいおり</p>
            <h3 style="margin-bottom:10%">名前：脇田伊織</h3>
            <h3>年齢：25歳</h3>
          </v-card-text>
          <v-img src="/images/admin.jpeg"></v-img>
          <v-card-actions style="justify-content:flex-end">
            <fa :icon="faGithub" @click="onClickGitHub" />
            <v-btn style="margin-top:5%" href="https://profile-1st.netlify.app/">プロフィール詳細</v-btn>
          </v-card-actions>
        </v-col>
        <v-spacer></v-spacer>
        <v-divider inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="7">
          <v-img src="/images/recruit.jpeg"></v-img>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card-title>プログラミング歴</v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-row justify="center" align="start">
              <v-col cols="12" sm="4">
                <v-card-subtitle style="padding-bottom:0;">マークアップ言語</v-card-subtitle>
                  <v-list v-for="markup in markups" :key="markup.title">
                    <v-list-item>
                    <v-list-item-icon>
                      <v-img :style="markup.width" :src="markup.icon"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ markup.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>{{ markup.month }}ヶ月</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card-subtitle style="padding-bottom:0;">プログラミング言語</v-card-subtitle>
                <v-list v-for="programming in programmings" :key="programming.title">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-img :style="programming.width" :src="programming.icon"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ programming.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>{{ programming.month }}ヶ月</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card-subtitle style="padding-bottom:0;">バージョン管理</v-card-subtitle>
                <v-list v-for="vcs in vcs" :key="vcs.title">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-img :style="vcs.width" :src="vcs.icon"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ vcs.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>{{ vcs.month }}ヶ月</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-card-subtitle style="padding-bottom:0;">バックエンド(Baas)</v-card-subtitle>
              <v-list v-for="baas in baas" :key="baas.title">
                <v-list-item>
                  <v-list-item-icon>
                    <v-img :style="baas.width" :src="baas.icon"></v-img>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ baas.title }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-content>
                    <v-list-item-title>{{ baas.month }}ヶ月</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["markups", "programmings", "baas", "vcs"]),
    fas () {
      return fas
    },
    faGithub () {
      return faGithub
    },
  },
  methods: {
    onClickGitHub() {
      window.location.href = 'https://github.com/ioio08'
    }
  },
}
</script>

<style lang="scss" scoped>
.fa-github {
  font-size:38px;
  margin: 6% 10% 0 0;
  cursor: pointer;
  &:hover {
    opacity: .8;
    border: 1px solid #000;
    border-radius: 50%;
  }
}
</style>