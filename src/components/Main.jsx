


const Main = props => {
    const matrix = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex}>
                {
                    tr.map((td, tdIndex) => {
                        return (
                            <td
                                key={tdIndex}
                                onClick={() => props.changeIndexArr([trIndex, tdIndex])}
                                className={(trIndex === props.indexArr[0] && tdIndex === props.indexArr[1]) ? 'cell active-cell' : 'cell'}
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
            <li key={value} className="numb" onClick={props.setValue}>{value}</li>
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