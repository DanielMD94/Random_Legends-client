import InitAxios from "./initAxios";

class ForumAxios extends InitAxios {
    constructor() {
        super('/forum')
    }

    createPost(body) {
        return this.axios.post('/post', body).then((response) => response.data);
    }

    allPost() {
        return this.axios.get('/').then((response) => response.data);
    }




}
export default ForumAxios;