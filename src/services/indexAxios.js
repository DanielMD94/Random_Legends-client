import InitAxios from "./initAxios";

class IndexAxios extends InitAxios {
    constructor() {
        super('')
    }

    getChampionList() {
        return this.axios.get('/championsList').then((response) => response.data)
    }

    getChampionDetails(name) {
        return this.axios.get(`/champion-details/${name}`).then((response) => response.data)
    }

    getRandomChampion() {
        return this.axios.get(`/randomPick`).then((response) => response.data)
    }

    getWeeklyRotation() {
        return this.axios.get(`/weeklyRotation`).then((response) => response.data)
    }

    getAllChamps() {
        return this.axios.get(`/checkBox`).then((response) => response.data)
    }

}
export default IndexAxios;