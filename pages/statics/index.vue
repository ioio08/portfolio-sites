<template>
  <SiteList :contents="statics">
    <template v-slot:title>静的</template>
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
        statics: [
          {
            id: '1',
            title: 'クローンサイト１',
            link: '/statics/',
            img: '/images/admin.jpeg' ,
            useLangs: [
              {
                icon: 'https://cdn.svgporn.com/logos/html-5.svg',
              },
              {
                icon: 'https://cdn.svgporn.com/logos/css-3.svg',
              },
            ]
          },
          {
            id: '2',
            title: 'クローンサイト２',
            link: '/statics/',
            img: '/images/admin.jpeg' ,
            useLangs: [
              {
                icon: 'https://cdn.svgporn.com/logos/html-5.svg',
              },
              {
                icon: 'https://cdn.svgporn.com/logos/css-3.svg',
              },
            ]
          },
          {
            id: '3',
            title: 'クローンサイト３',
            link: '/statics/',
            img: '/images/admin.jpeg' ,
            useLangs: [
              {
                icon: 'https://cdn.svgporn.com/logos/html-5.svg',
              },
              {
                icon: 'https://cdn.svgporn.com/logos/css-3.svg',
              },
            ]
          },
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