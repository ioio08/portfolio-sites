<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6" md="4">
      <v-card hover>
        <v-container>
        <v-card-title>コンテンツサイト</v-card-title>
        <v-divider></v-divider>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="6" >
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
                <v-btn to="/dynamic">動的サイト一覧へ</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card hover>
        <v-container>
          <v-card-title>作成者</v-card-title>
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
export default {
  data() {
    return {
      markups:[
        {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",month: '3',},
        {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",month: '3'},
        {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",month: '3'}
      ],
      programmings:[
        {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",month: '3'},
        {title: "Vue", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/vue.svg",month: '3'},
        {title: "Nuxt", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/nuxt-icon.svg",month: '3'},
      ],
      baas:[
        {title: "Firebase", width: "width:25px;", icon:"https://cdn.svgporn.com/logos/firebase.svg",month: '3'},
      ],
      vcs:[
        {title: "Git", width: "width:30px;", icon:"https://cdn.svgporn.com/logos/git-icon.svg", month: '3',},
        {title: "GitHub", width: "width:30px;", icon:"https://cdn.svgporn.com/logos/github-icon.svg", month: '3',},
      ],
    }
  }
}
</script>
