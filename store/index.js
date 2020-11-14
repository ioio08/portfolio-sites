import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
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
      items: [
        {icon: 'mdi-home',title: 'ホーム',to: '/'},
        {icon: 'mdi-apps',title: '動的サイト一覧',to: '/dynamics'},
        {icon: 'mdi-apps',title: '静的サイト一覧',to: '/statics'},
        {icon: 'mdi-chart-bubble',title: '作成者について',to: '/admin'}
      ],
      statics: [
        {id: '1',title: 'クローンサイト１',link: '/statics/',img: '/images/admin.jpeg' ,useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
        {id: '2',title: 'クローンサイト２',link: '/statics/',img: '/images/admin.jpeg' ,useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
        {id: '3',title: 'クローンサイト３',link: '/statics/',img: '/images/admin.jpeg' ,useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
      ],
      dynamics: [
        {id: '0',title: 'Bingo',link: '/dynamics/',to:'https://js-bingo.netlify.app/',img: '/images/js/Bingo.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '1',title: 'Slot',link: '/dynamics/',to:'https://js-slot.netlify.app/',img: '/images/js/Slot.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {
              title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '2',title: 'SlideShow',link: '/dynamics/',to:'https://js-slideshow.netlify.app/',img: '/images/js/SlideShow.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '3',title: 'Watch',link: '/dynamics/',to:'https://js-watch.netlify.app/',img: '/images/js/Watch.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '4',title: 'ECstore',link: '/dynamics/',to:'',img: '/images/js/Bingo.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '5',title: 'ChoicesQuestion',link: '/dynamics/',to:'https://js-questions.netlify.app/',img: '/images/js/ChoicesQuestions.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: '6',title: 'Typing',link: '/dynamics/',to:'https://js-typing.netlify.app/',img: '/images/js/Typing.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]
        },
        {id: '7',title: 'Calender',link: '/dynamics/',to:'https://js-calender.netlify.app/',img: '/images/js/Calender.png' , useLangs: [
            {title: "HTML", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:15px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
      ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
  })
}

export default createStore