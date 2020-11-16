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
        {icon: 'mdi-apps',title: 'アプリ一覧',to: '/dynamics'},
        {icon: 'mdi-application',title: '静的サイト一覧',to: '/statics'},
        {icon: 'mdi-account-circle-outline',title: '製作者について',to: '/admin'}
      ],
      statics: [
        {id: '0',title: 'FV-Code',link: '/statics/',to: '', img: '/images/admin.jpeg' ,git:'',  useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
        {id: '1',title: 'クローンサイト１',link: '/statics/',to: '', img: '/images/admin.jpeg' ,git:'',  useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
        {id: '2',title: 'クローンサイト２',link: '/statics/',to: '', img: '/images/admin.jpeg' ,git:'',  useLangs: [
            {icon: 'https://cdn.svgporn.com/logos/html-5.svg',},
            {icon: 'https://cdn.svgporn.com/logos/css-3.svg',},]},
      ],
      dynamics: [
        {id: 0,title: 'Bingo',link: '/dynamics/',to:'https://js-bingo.netlify.app/',img: '/images/js/Bingo.png' , git:'https://github.com/ioio08/Bingo',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 1,title: 'Slot',link: '/dynamics/',to:'https://js-slot.netlify.app/',img: '/images/js/Slot.png' , git:'https://github.com/ioio08/Slot',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {
              title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id:2,title: 'SlideShow',link: '/dynamics/',to:'https://js-slideshow.netlify.app/',img: '/images/js/SlideShow.png' , git:'https://github.com/ioio08/SlideShow',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 3,title: 'Watch',link: '/dynamics/',to:'https://js-watch.netlify.app/',img: '/images/js/Watch.png' , git:'https://github.com/ioio08/Watch',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 4,title: 'ChoicesQuestion',link: '/dynamics/',to:'https://js-questions.netlify.app/',img: '/images/js/ChoicesQuestions.png' , git:'https://github.com/ioio08/choice_question',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 5,title: 'Typing',link: '/dynamics/',to:'https://js-typing.netlify.app/',img: '/images/js/Typing.png' , git:'https://github.com/ioio08/Typing',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 6,title: 'Calender',link: '/dynamics/',to:'https://js-calender.netlify.app/',img: '/images/js/Calender.png' , git:'https://github.com/ioio08/Calendar',  useLangs: [
            {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
            {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
            {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
            {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},]},
        {id: 7,title: 'Todo-App',link: '/dynamics/',to:'https://todo-vuejs-lesson.netlify.app/',img: '/images/vue/Todo.png' , git:'https://github.com/ioio08/try_todolist',  useLangs: [
          {title: "HTML", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/html-5.svg",},
          {title: "CSS", width: "width:20px;", icon: "https://cdn.svgporn.com/logos/css-3.svg",},
          {title: "SASS", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/sass.svg",},
          {title: "JavaScript", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/javascript.svg",},
          {title: "Vue", width: "width:30px;", icon: "https://cdn.svgporn.com/logos/vue.svg",},]}
      ],

    },
    mutations: {

    },
    actions: {

    },
    getters: {
      getDynamicsData: state => id => {
        return state.dynamics.find(data => data.id == id)
      },
      getStaticsData: state => id => {
        return state.statics.find(data => data.id == id)
      },
    },
  })
}

export default createStore