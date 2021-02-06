import React from 'react'
import {
  calcNextGeneration,
  CellState,
  createLife,
  GLIDER_GUN,
  MIDDLE_WEIGHT_SPACESHIP,
  BLINKER,
  TOAD,
  BEACON,
  createInitialGeneration,
  setCellState,
} from '../lib/lifegame'

const Lifegame = () => {
  const clientSize =
    typeof document === 'undefined'
      ? { width: 1000, height: 1000 }
      : {
          width: document.querySelector('.content').clientWidth,
          height: document.querySelector('.content').clientHeight,
        }

  const field = { width: 20, height: 40 }
  const cellSize = React.useMemo(() => {
    console.log('w', clientSize.width / field.width)
    console.log('h', clientSize.height / field.height)
    const c = Math.min(
      Math.ceil(clientSize.width / field.width),
      Math.ceil(clientSize.height / field.height)
    )
    console.log('c', c)
    return c
  }, [clientSize])

  const [generation, setGeneration] = React.useState(null)

  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    let shouldLoop = true
    if (!generation) {
      setGeneration(() => {
        const initialGeneration = createInitialGeneration(field)
        const nextGeneration = initialGeneration.map((row) => [...row])
        // createLife(GLIDER, nextGeneration, 0, 0, 0)
        // createLife(GLIDER, nextGeneration, 10, 10, 90)
        // createLife(GLIDER, nextGeneration, 20, 21, 180)
        // createLife(GLIDER, nextGeneration, 0, 18, 270)
        createLife(GLIDER_GUN, nextGeneration, 0, 0, 0)
        createLife(BLINKER, nextGeneration, 16, 1, 90)
        createLife(MIDDLE_WEIGHT_SPACESHIP, nextGeneration, 15, 28, 270)
        createLife(BEACON, nextGeneration, 12, 33, 0)
        return nextGeneration
      })
    } else {
      new Promise((resolve) => setTimeout(resolve, 150)).then(() => {
        if (shouldLoop && !isPaused) {
          setGeneration(calcNextGeneration(generation).nextGeneration)
        }
      })
    }
    return () => (shouldLoop = false)
  }, [generation, isPaused])

  const handleHover = () => {
    setIsPaused(true)
  }
  const handleHoverEnd = () => {
    setIsPaused(false)
  }

  console.log('cellSize', cellSize)

  return (
    <div>
      {generation &&
        generation.map((row, i, array) => {
          const rowClassName = i === array.length - 1 ? 'row last-row' : 'row'
          return (
            <div
              key={i}
              className={rowClassName}
              style={{ height: `${cellSize}px` }}
            >
              {row.map((cell, j, cellArray) => {
                const cellClassName =
                  j === cellArray.length - 1 ? 'cell last-cell' : 'cell'
                const stateClassName =
                  cell === CellState.ALIVE ? 'alive' : 'dead'

                return cell === CellState.ALIVE ? (
                  <div
                    key={`${i}/${j}`}
                    className={cellClassName}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverEnd}
                  >
                    <i
                      className="fab fa-twitter"
                      style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        fontSize: `${cellSize}px`,
                      }}
                    ></i>
                  </div>
                ) : (
                  <div
                    key={`${i}/${j}`}
                    style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
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
