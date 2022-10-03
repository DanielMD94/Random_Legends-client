import InitAxios from "./initAxios";

class AuthAxios extends InitAxios {

    constructor() {
        super('/auth')
    }

    registro(body) {
        return this.axios.post('/signUp', body).then((response) => response.data);
    }

    login(body) {
        return this.axios.post('/login', body).then((response) => response.data);
    }

    me(token) {

        return this.axios.get('/me')
            // , {
            //     headers: {
            //         'authorization': `Bearer ${token}`
            //     }
            // })
            .then((response) => response.data);
    }

}
export default AuthAxios;