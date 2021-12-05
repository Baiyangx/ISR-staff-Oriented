import api from '../http-common.js'

export const Login = (params) => api.get('/reservation', {params})