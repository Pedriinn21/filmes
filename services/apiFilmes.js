import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'bearer'
    }
})

export default apiFilmes 