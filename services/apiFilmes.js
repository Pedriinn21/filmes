const { default: axios } = require("axios");


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2Y3YzBjNmVhNzQwMTViM2QwZWI2MGZkOGFlMDBlMCIsInN1YiI6IjY0ZWZjNjFkNzdkMjNiMDE1MDM4YjQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63rNE3nCSOTLl9AwFhK3w2xDmdRdQC4bYHPpRfOb5GI"
    }
})

export default apiFilmes 