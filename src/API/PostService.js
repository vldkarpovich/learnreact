import axios from "axios";

export default class PostService {
    static async getAll(pageSize, pageNumber){
        const response = await axios.get('http://localhost:28114/api/cars', {
            params:{
                pagenumber: pageNumber,
                pagesize: pageSize
            }
        })
        return response;
    }

    static async getOneById(id){
        const response = await axios.get('http://localhost:28114/api/cars/getvehicle?id=' + id)
        return response.data;
    }

    static async postAddToBasket(id){
        const response = await axios.post('http://localhost:28114/api/cars/posttobasket?id='+id)
        return response.data;
    }

    static async getBasket(){
        const response = await axios.get('http://localhost:28114/api/cars/getbasket')
        return response.data;
    }

    static async deleteFromBasket(id){
        const response = await axios.delete('http://localhost:28114/api/cars/deletebasket?id='+id)
        return response.data;
    }
}