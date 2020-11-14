<template>
  <v-card>
    <v-container>
      <v-card-title><slot name="title"></slot>一覧</v-card-title>
      <v-divider></v-divider>
      <v-card hover style="margin-top:20px;">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" md="5" lg="5">
              <v-card-text>
                <v-img src="/images/js/SlideShow.png"></v-img>
              </v-card-text>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="6" md="6" lg="6">
              <transition name="fade">
                <v-card-title><h3 >Mono-Que</h3> </v-card-title>
              </transition>
              <transition name="fade">
                <v-card-text >
                  <h3 >モノと対話するように</h3>
                </v-card-text>
              </transition>
                <v-card-text>
                  <p >身近なモノ、気になるモノ、手放そうとするモノ。<br>そんなモノタチと少しの時間だけでも、対話するように接してみて欲しくて制作しました。 </p>
                </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-spacer></v-spacer>
      <v-row align="center"  style="margin: 20px 20px 0 0;">
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
                <v-row justify="center">
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
  </v-card>

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