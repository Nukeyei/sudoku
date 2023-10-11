import { NavLink } from "react-router-dom"



const Menu = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-around">
            <h1>Sudoku</h1>
            <NavLink to="/main">Play</NavLink>
        </div>
    )
}

export default Menu