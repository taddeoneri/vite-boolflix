import { reactive } from 'vue';

export const store = reactive({
    filmList: [],
    serieTvList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        film: 'search/movie?api_key=041b2a30c1d2321b1dcaeb0809bce857&query=a',
        serieTv: 'search/tv?api_key=041b2a30c1d2321b1dcaeb0809bce857&query=a'
    },
    baseImg: 'https://image.tmdb.org/t/p/w500/',
    search: ''
})