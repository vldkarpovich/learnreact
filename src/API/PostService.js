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

    static async getOne(id){
        const response = await axios.get('http://localhost:28114/api/cars/getvehicle?id=' + id)
        return response.data;
    }

}