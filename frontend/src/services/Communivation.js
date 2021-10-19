import Api from "./Api";

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },
    getAll() {
        return Api().get('clients//')
    },
    // get(id) {
    //     return Api().get('clients/:id', id)
    // },
    create(name) {
        return Api().post('clients//', name)
    },
    update(update) {
        return Api().put(`clients/${update.id}`, update)
    },
    delete(id) {
        return Api().delete(`clients/${id}`, id)
    }


}