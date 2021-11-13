import axios from 'axios'

const api = axios.create({
    baseURL: 'https://allan-cadastro-aluno.herokuapp.com/'
})

export default api;