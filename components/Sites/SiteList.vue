<template>
  <v-container>
    <v-card-title><slot name="title"></slot>一覧</v-card-title>
    <v-divider></v-divider>
    <slot name="topApp"></slot>
    <v-spacer></v-spacer>
    <v-row align="center"  style="margin: 20px 0 0 0;">
      <slot name="keyApp"></slot>
      <v-col v-for="content in contents"
      :key="content.title" cols="12" sm="4" >
        <nuxt-link :to="content.link + content.id">
          <v-card hover>
            <v-card-subtitle>{{ content.title }} </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
              <v-img :src="content.img"></v-img>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-subtitle style="padding-bottom:0;">使用言語</v-card-subtitle>
            <v-card-text  style="padding-bottom:0;">
              <v-row justify="start">
                <v-col cols="12" sm="2" v-for="lang in content.useLangs" :key="lang.icon">
                  <v-img :style="lang.width" :src="lang.icon"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    contents: {
      type:Array,
      default: true,
    },
  },
}
</script>

<style lang="scss" >


</style>