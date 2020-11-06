<template>
  <SiteList :contents="dynamics">
    <template v-slot:title>動的</template>
  </SiteList>
</template>
<script>
  import SiteList from '@/components/SiteList'

  export default {
    components: {
      SiteList,
    },
    data() {
      return {
        dynamics: [
          {
            title: 'タイトルクローンサイト',
            link: '/pages',
            img: '/images/admin.jpeg' ,
            src: '/images/admin.jpeg',
            useLangs: [
              {
                icon: 'https://cdn.svgporn.com/logos/html-5.svg',
              },
              {
                icon: 'https://cdn.svgporn.com/logos/css-3.svg',
              },
            ]
          }
        ]
      }
    }

  }
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>