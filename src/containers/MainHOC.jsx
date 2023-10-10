import { useState } from "react";
import Main from "../components/Main"


const MainHOC = props => {
    const [indexArr, changeIndexArr] = useState([0, 0])
    const setValue = event => {
        const action = { type: 'set value', value: +event.target.textContent, indexArr }
        props.dispatch(action)
    }

    return <Main matrix={props.matrix} values={props.values} errors={props.errors} changeIndexArr={changeIndexArr} indexArr={indexArr} setValue={setValue} />
}

export default MainHOC