import { NavLink } from "react-router-dom"



const Win = () => {
    return (
        <div>
            <h1>You win</h1>
            <NavLink to="/menu">Menu</NavLink>
        </div>
    )
}

export default Win