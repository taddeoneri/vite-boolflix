import { reactive } from 'vue';

export const store = reactive({
    filmList: [],
    serieList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        film: 'search/movie',
        serieTv: 'search/tv'
    },
    baseImg: 'https://image.tmdb.org/t/p/w500/',
    search: '',
    params:{
        api_key: '041b2a30c1d2321b1dcaeb0809bce857',
        query: ''
    }
})