import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Main from "../components/Main";
import { gameOverActionCreator, nextLevelActionCreator, setValueActionCreator } from "../store/reducer";

const MainHOC = props => {
    const navigate = useNavigate()
    const isWin = () => {
        if (props.errors >= 3) {
            const action = gameOverActionCreator()
            props.dispatch(action)
            navigate('/gameover')
            return
        }
        for (const arr of props.matrix) {
            if (arr.includes(0)) {
                return
            }
        }
        const action = nextLevelActionCreator()
        props.dispatch(action)
        navigate('/win')
    }
    useEffect(() => isWin(), [props.matrix])
    const [indexArr, changeIndexArr] = useState([0, 0])
    const setValue = event => {
        const action = setValueActionCreator(+event.target.textContent, indexArr)
        props.dispatch(action)
    }

    return <Main matrix={props.matrix} values={props.values} errors={props.errors} changeIndexArr={changeIndexArr} indexArr={indexArr} setValue={setValue} />
}

export default MainHOC