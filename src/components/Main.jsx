import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


const Main = props => {
    const navigate = useNavigate()
    const isWin = () => {
        if (props.errors >= 3) {
            props.gameOver()
            navigate('/gameover')
            return
        }
        for (const arr of props.matrix) {
            if (arr.includes(0)) {
                return
            }
        }
        props.nextLevel()
        navigate('/win')
    }
    useEffect(() => isWin(), [props.matrix])
    const [indexArr, changeIndexArr] = useState([0, 0])
    const setValue = event => {
        props.setValue(+event.target.textContent, indexArr)
    }
    const matrix = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>
                {
                    tr.map((td, tdIndex) => {
                        return (
                            <td
                                key={tdIndex}
                                onClick={() => changeIndexArr([trIndex, tdIndex])}
                                className={(trIndex === indexArr[0] && tdIndex === indexArr[1]) ? 'cell active-cell' : 'cell'}
                            >
                                {td || ""}
                            </td>
                        )
                    })
                }
            </tr >
        )
    })
    const valuesList = props.values.map(value => {
        return (
            <li key={value} className="numb" onClick={setValue}>{value}</li>
        )
    })

    return (
        <div className="d-flex flex-column justify-content-around align-items-center min-vh-100">
            <table className="sudoku">
                <tbody>
                    {matrix}
                </tbody>
            </table>
            <ul > {valuesList} </ul>
            <div className="errosrs">Errors: {props.errors}/3</div>
        </div>
    )
}

export default Main