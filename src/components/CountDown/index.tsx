import { useEffect, useState } from 'react'
import { usePomodoroCycles } from '../../contexts/PomodoroCycleContext'
import { modeLabel } from '../../utils/modeLabels'
import { CountdownContainer } from './styles'

const CountDown = () => {
  const { pomodoroCycle, activedCycle, switchMode, handleShortBreakEnd, handlePercentageRemaining } = usePomodoroCycles()
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = pomodoroCycle ? pomodoroCycle[activedCycle] * 60 : 0
  const currentSeconds = pomodoroCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = String(Math.floor(currentSeconds / 60)).padStart(2, '0')
  const secondsAmount = String(currentSeconds % 60).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activedCycle) {
      interval = setInterval(() => {
        if (pomodoroCycle.start) {
          setAmountSecondsPassed(amountSecondsPassed + 1);
          handlePercentageRemaining((100 * (amountSecondsPassed + 1)) / totalSeconds)
        } else {
          setAmountSecondsPassed(amountSecondsPassed)
        }

        if (amountSecondsPassed === totalSeconds) {
          if (activedCycle === "pomodoro") {
            switchMode("shortBreak")
          }

          if (activedCycle === "shortBreak") {
            handleShortBreakEnd()
          }

          if (activedCycle === "longBreak") {
            switchMode("pomodoro")
          }
        }

      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [pomodoroCycle, activedCycle, amountSecondsPassed])

  useEffect(() => {
    setAmountSecondsPassed(0)
    handlePercentageRemaining(0);
  }, [activedCycle])

  useEffect(() => {
    if (activedCycle) {
      document.title = `${minutesAmount}:${secondsAmount} ${modeLabel[activedCycle]}`
    }
  }, [activedCycle, minutesAmount, secondsAmount])

  return (
    <CountdownContainer>
      <>
        <span>{minutesAmount[0]}</span>
        <span>{minutesAmount[1]}</span>
        <span>:</span>
        <span>{secondsAmount[0]}</span>
        <span>{secondsAmount[1]}</span>
      </>
    </CountdownContainer>
  )
}
export default CountDown
