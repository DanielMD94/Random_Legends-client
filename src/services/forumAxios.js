import InitAxios from "./initAxios";

class ForumAxios extends InitAxios {
    constructor() {
        super('/forum')
    }

    allPost() {
        return this.axios.get('/').then((response) => response.data);
    }

    onePost(idPost) {
        return this.axios.get(`/${idPost}`).then((response) => response.data);
    }

    createPost(body) {
        return this.axios.post('/post', body).then((response) => response.data);
    }

    createComment(body) {
        return this.axios.post('/comment', body).then((response) => response.data);
    }

    deletePost(idPost) {
        return this.axios.delete(`/${idPost}/delete`).then((response) => response.data)
    }




}
export default ForumAxios;