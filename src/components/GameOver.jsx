import { NavLink } from "react-router-dom"



const GameOver = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-around">
            <h1>You lose</h1>
            <NavLink to="/menu">Menu</NavLink>
        </div>
    )
}

export default GameOver