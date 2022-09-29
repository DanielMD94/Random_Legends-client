import InitAxios from "./initAxios";

class ProfileAxios extends InitAxios {
    constructor() {
        super()
    }

    getUserProfile(id) {
        return this.axios.get(`/profile/${id}`).then((response) => response.data)
    }
}

export default ProfileAxios;