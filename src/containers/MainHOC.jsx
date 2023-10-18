import Main from "../components/Main";
import { gameOverActionCreator, nextLevelActionCreator, setValueActionCreator } from "../store/reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        matrix: state.main.matrixData.start,
        values: state.main.valueData,
        errors: state.main.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setValue(value, indexArr) {
            const action = setValueActionCreator(value, indexArr)
            dispatch(action)
        },
        gameOver() {
            const action = gameOverActionCreator()
            dispatch(action)
        },
        nextLevel() {
            const action = nextLevelActionCreator()
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main) 