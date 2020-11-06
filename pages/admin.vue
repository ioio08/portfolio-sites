<template>
  <v-card>
    <v-card-title>作成者について</v-card-title>
    <v-divider></v-divider>
    <v-container style="padding-top:0;">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8">
          <v-card-title>履歴書</v-card-title>
          <v-img src="/images/admin.jpeg"></v-img>
          <v-card-actions style="justify-content:flex-end">
            <v-btn href="https://profile-1st.netlify.app/">リンク</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card-title>プログラミング歴</v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-row justify="center" align="center">
              <v-col cols="12" sm="3">
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
              <v-col cols="12" sm="3">
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
              <v-col cols="12" sm="3">
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
              </v-col>
              <v-col cols="12" sm="3">
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
  export default {
    data() {
    return {
      markups:[
        {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",month: '3',},
        {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",month: '3'},
        {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",month: '3'}
      ],
      programmings:[
        {title: "JS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",month: '3'},
        {title: "Vue", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/vue.svg",month: '2'},
        {title: "Nuxt", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/nuxt-icon.svg",month: '2'},
      ],
      baas:[
        {title: "Firebase", width: "width:25px;", icon:"https://cdn.svgporn.com/logos/firebase.svg",month: '1'},
      ],
      vcs:[
        {title: "Git", width: "width:30px;", icon:"https://cdn.svgporn.com/logos/git-icon.svg", month: '2',},
        {title: "GitHub", width: "width:30px;", icon:"https://cdn.svgporn.com/logos/github-icon.svg", month: '2',},
      ],
    }
  }

  }
</script>

<style>

</style>