const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3e54d07be171d1072d3804c8c27094dc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3e54d07be171d1072d3804c8c27094dc&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchInput = search.value
    if(searchInput && searchInput !== '') {
        getMovies(SEARCH_API + searchInput)
        search.value = ''
    } else {
        window.location.reload()
    }
})

