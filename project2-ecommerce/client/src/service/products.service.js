import axios from 'axios'

export default class ProductService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            // withCredentials: true
        })
    }

    getAllProducts = () => this.api.get('/getAllProducts')
    getOneProduct = id => this.api.get(`/getOneProduct/${id}`)
    saveProduct = product => this.api.post('/newProduct', product)
    editProduct = (id, product) => this.api.put(`/${id}/editProduct`, product)
    deleteProduct = id => this.api.delete(`/${id}/delete`)
}