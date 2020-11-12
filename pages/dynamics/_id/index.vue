<template>
  <v-card>
    <v-card-title>サイトについて</v-card-title>
    <v-divider></v-divider>
    <v-container style="padding-top:0;">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6">
          <v-card-title>サイトタイトル{{ $route.params.id }} </v-card-title>
          <v-img src="/images/admin.jpeg"></v-img>
          <v-card-actions style="justify-content:flex-end">
            <v-btn>リンク</v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card-title>サイト詳細</v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle>使用言語</v-card-subtitle>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="12" sm="2">
                <v-img style="width:25px;" src="https://cdn.svgporn.com/logos/html-5.svg"></v-img>
              </v-col>
              <v-col cols="12" sm="2">
                <v-img style="width:25px;" src="https://cdn.svgporn.com/logos/html-5.svg"></v-img>
              </v-col>
              <v-col cols="12" sm="2">
                <v-img style="width:25px;" src="https://cdn.svgporn.com/logos/html-5.svg"></v-img>
              </v-col>
              <v-col cols="12" sm="2">
                <v-img style="width:25px;" src="https://cdn.svgporn.com/logos/html-5.svg"></v-img>
              </v-col>
              <v-col cols="12" sm="2">
                <v-img style="width:25px;" src="https://cdn.svgporn.com/logos/html-5.svg"></v-img>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-subtitle>出来る事</v-card-subtitle>
          <v-card-text>
            <v-sheet>このサイトは、、、こんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんなこんな</v-sheet>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    props:['dynamics'],

  }
</script>
