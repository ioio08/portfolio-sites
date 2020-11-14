<template>
  <SiteList :contents="dynamics">
    <template v-slot:title>アプリ</template>
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
            id: '0',
            title: 'Bingo',
            link: '/dynamics/',
            to:'https://js-bingo.netlify.app/',
            img: '/images/js/Bingo.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '1',
            title: 'Slot',
            link: '/dynamics/',
            to:'https://js-slot.netlify.app/',
            img: '/images/js/Slot.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '2',
            title: 'SlideShow',
            link: '/dynamics/',
            to:'https://js-slideshow.netlify.app/',
            img: '/images/js/SlideShow.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '3',
            title: 'Watch',
            link: '/dynamics/',
            to:'https://js-watch.netlify.app/',
            img: '/images/js/Watch.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '4',
            title: 'ECstore',
            link: '/dynamics/',
            to:'',
            img: '/images/js/Bingo.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '5',
            title: 'ChoicesQuestion',
            link: '/dynamics/',
            to:'https://js-questions.netlify.app/',
            img: '/images/js/ChoicesQuestions.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '7',
            title: 'Typing',
            link: '/dynamics/',
            to:'https://js-typing.netlify.app/',
            img: '/images/js/Typing.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
              },
            ]
          },
          {
            id: '8',
            title: 'Calender',
            link: '/dynamics/',
            to:'https://js-calender.netlify.app/',
            img: '/images/js/Calender.png' ,
            useLangs: [
              {
                title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",
              },
              {
                title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",
              },
              {
                title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",
              },
              {
                title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",
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