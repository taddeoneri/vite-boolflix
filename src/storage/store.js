import { reactive } from 'vue';

export const store = reactive({
    filmList: [],
    serieTvList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        film: 'search/movie',
        serieTv: 'search/tv'
    },
    errormessage: '',
    loading: false,
    search: ''
})