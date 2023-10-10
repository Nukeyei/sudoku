import reducer from "./reducer"



const store = {
    _state: reducer(),
    getState() {
        return this._state
    },
    _render() {
        // Функция для перезаписи
    },
    subscribe(observer) {
        // Перезаписываем сallSubscriber
        this._render = observer
    },
    dispatch(action) {
        this._state = reducer(this._state, action)
        this._render(this._state)
    }
}




export default store

window.store = store