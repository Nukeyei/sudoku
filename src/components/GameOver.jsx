import { NavLink } from "react-router-dom"



const GameOver = () => {
    return (
        <div>
            <h1>You lose</h1>
            <NavLink to="/menu">Menu</NavLink>
        </div>
    )
}

export default GameOver