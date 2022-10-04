import InitAxios from "./initAxios";

class ProfileAxios extends InitAxios {
    constructor() {
        super('/profile')
    }

    getAllUsers() {
        return this.axios.get(`/users`).then((response) => response.data)
    }

    getUserProfile(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

    updateUser(id, body) {
        return this.axios.put(`/${id}/update`, body).then((response) => response.data)
    }

    deleteUser(id) {
        return this.axios.delete(`/${id}/delete`).then((response) => response.data)
    }
}

export default ProfileAxios;