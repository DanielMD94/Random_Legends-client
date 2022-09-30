import InitAxios from "./initAxios";

class ProfileAxios extends InitAxios {
    constructor() {
        super('/profile')
    }

    getUserProfile(id) {

        return this.axios.get(`/${id}`).then((response) => response.data)
    }
}

export default ProfileAxios;