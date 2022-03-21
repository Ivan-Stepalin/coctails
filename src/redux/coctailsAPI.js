import axios from "../utils/customAxios";

export const coctailsAPI = {
    getCoctailByName(name) {
        return axios.get(`search.php?s=${name}`)
    }
}