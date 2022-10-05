import InitAxios from "./initAxios";

class IndexAxios extends InitAxios {
    constructor() {
        super('')
    }

    getChampionList(query) {
        const { Fighter, Mage, Assassin, Support, Marksman, Tank } = query
        return this.axios.get(`/championsList?Fighter=${Fighter}&Mage=${Mage}&Assassin=${Assassin}&Support=${Support}&Marksman=${Marksman}&Tank=${Tank}`).then((response) => response.data)
    }

    getFindChamps(query) {
        const { Fighter, Mage, Assassin, Support, Marksman, Tank } = query
        return this.axios.get(`/searchChamp?Fighter=${Fighter}&Mage=${Mage}&Assassin=${Assassin}&Support=${Support}&Marksman=${Marksman}&Tank=${Tank}`)
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