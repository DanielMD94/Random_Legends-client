import axios from "axios";

class InitAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `http://localhost:5005`
        })
    }
}

export default InitAxios;