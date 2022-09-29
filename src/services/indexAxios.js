import InitAxios from "./initAxios";

class IndexAxios extends InitAxios {
    constructor() {
        super()
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

}
export default IndexAxios;





// getAllCocktails(query) {
//     return this.axios.get(`/?offset=${query.page}`).then((response) => response.data)
// }

// getOneCocktailById(id) {
//     return this.axios.get(`/${id}`).then((response) => response.data);
// }

// createCocktail(body) {
//     return this.axios.post('/', body).then((response) => response.data);
// }

// updateCocktail(id, body) {
//     return this.axios.put(`/${id}`, body).then((response) => response.data);
// }

// deleteCocktail(id) {
//     return this.axios.delete(`/${id}`).then((response) => response.data);
// }