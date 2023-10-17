
const GAME_OVER = 'game over'
const SET_VALUE = 'set value'
const NEXT_LEVEL = 'next level'

const data = {
    level: 0,
    matrixData: [
        [
            [
                [1, 2, 3, 5, 4, 6],
                [6, 5, 4, 3, 1, 2],
                [2, 6, 1, 4, 5, 3],
                [4, 3, 5, 6, 2, 1],
                [3, 4, 2, 1, 6, 5],
                [5, 1, 6, 2, 3, 4]
            ],
            [
                [0, 2, 3, 0, 4, 6],
                [0, 5, 4, 3, 1, 2],
                [2, 6, 1, 0, 0, 0],
                [0, 3, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [5, 0, 0, 0, 0, 4]
            ]
        ],
        [
            [
                [4, 6, 3, 1, 2, 5],
                [1, 2, 5, 3, 4, 6],
                [5, 1, 6, 4, 3, 2],
                [2, 3, 4, 5, 6, 1],
                [6, 4, 1, 2, 5, 3],
                [3, 5, 2, 6, 1, 4]
            ],
            [
                [0, 0, 0, 1, 2, 0],
                [1, 2, 5, 0, 4, 0],
                [0, 0, 0, 4, 3, 2],
                [0, 0, 4, 0, 0, 0],
                [0, 4, 1, 2, 5, 3],
                [3, 0, 0, 0, 0, 0]
            ]
        ],
        [
            [
                [2, 1, 5, 3, 4, 6],
                [6, 4, 3, 1, 2, 5],
                [1, 3, 2, 5, 6, 4],
                [5, 6, 4, 2, 1, 3],
                [4, 5, 1, 6, 3, 2],
                [3, 2, 6, 4, 5, 1]
            ],
            [
                [2, 0, 5, 3, 4, 0],
                [0, 4, 3, 0, 0, 0],
                [0, 3, 0, 0, 6, 0],
                [5, 6, 0, 2, 0, 0],
                [4, 5, 1, 0, 0, 0],
                [0, 2, 0, 0, 0, 1]
            ]
        ],
    ]
}

const initialState = {
    matrixData: {
        // Глубогое клонирование объекта 
        start: JSON.parse(JSON.stringify(data.matrixData[data.level][1])),
        end: JSON.parse(JSON.stringify(data.matrixData[data.level][0])),
    },
    errors: 0,
    valueData: [1, 2, 3, 4, 5, 6]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            const newState = {
                ...state,
                matrixData: {
                    ...state.matrixData,
                    start: [...state.matrixData.start]
                }
            }
            if (state.matrixData.end[action.indexArr[0]][action.indexArr[1]] === action.value) {
                newState.matrixData.start[action.indexArr[0]][action.indexArr[1]] = action.value
            } else {
                newState.errors++

            }
            return newState
        case NEXT_LEVEL:
            data.level = (data.level + 1) % data.matrixData.length
            return {
                matrixData: {
                    // Глубогое клонирование объекта 
                    start: JSON.parse(JSON.stringify(data.matrixData[data.level][1])),
                    end: JSON.parse(JSON.stringify(data.matrixData[data.level][0])),
                },
                errors: 0,
                valueData: [1, 2, 3, 4, 5, 6]
            }
        case GAME_OVER:
            return {
                matrixData: {
                    // Глубогое клонирование объекта 
                    start: JSON.parse(JSON.stringify(data.matrixData[data.level][1])),
                    end: JSON.parse(JSON.stringify(data.matrixData[data.level][0])),
                },
                errors: 0,
                valueData: [1, 2, 3, 4, 5, 6]
            }
        default:
            return state
    }
    return state
}

export const setValueActionCreator = (value, indexArr) => {
    return { type: SET_VALUE, value, indexArr }
}

export const nextLevelActionCreator = () => {
    return { type: NEXT_LEVEL, }
}

export const gameOverActionCreator = () => {
    return { type: GAME_OVER, }
}

export default reducer