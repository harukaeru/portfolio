import React from 'react'
import {
  calcNextGeneration,
  CellState,
  createInitialGeneration,
  setCellState,
} from '../lib/lifegame'

const Lifegame = () => {
  const field = { width: 30, height: 30 }
  const [generation, setGeneration] = React.useState(null)

  React.useEffect(() => {
    if (!generation) {
      setGeneration(() => {
        const initialGeneration = createInitialGeneration(field)
        const nextGeneration = initialGeneration.map((row) => [...row])
        setCellState(nextGeneration, CellState.ALIVE, 1, 0)
        setCellState(nextGeneration, CellState.ALIVE, 1, 2)
        setCellState(nextGeneration, CellState.ALIVE, 2, 1)
        setCellState(nextGeneration, CellState.ALIVE, 0, 2)
        setCellState(nextGeneration, CellState.ALIVE, 1, 2)
        setCellState(nextGeneration, CellState.ALIVE, 2, 2)
        return nextGeneration
      })
    } else {
      new Promise((resolve) => setTimeout(resolve, 400)).then(() =>
        setGeneration(calcNextGeneration(generation).nextGeneration)
      )
    }
  }, [generation])

  return (
    <div>
      {generation &&
        generation.map((row, i, array) => {
          const rowClassName = i === array.length - 1 ? 'row last-row' : 'row'
          return (
            <div key={i} className={rowClassName}>
              {row.map((cell, j, cellArray) => {
                const cellClassName =
                  j === cellArray.length - 1 ? 'cell last-cell' : 'cell'
                const stateClassName =
                  cell === CellState.ALIVE ? 'alive' : 'dead'

                return cell === CellState.ALIVE ? (
                  <div key={`${i}/${j}`} className={cellClassName}>
                    <i className="fa-2x fab fa-twitter"></i>
                  </div>
                ) : (
                  <div
                    key={`${i}/${j}`}
                    className={cellClassName + ' ' + stateClassName}
                  ></div>
                )
              })}
            </div>
          )
        })}
    </div>
  )
}

export default Lifegame
