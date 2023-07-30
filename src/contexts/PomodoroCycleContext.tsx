import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

const initialConfigTimer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 3,
}

interface ICycle {
  pomodoro: number,
  shortBreak: number,
  longBreak: number,
  longBreakInterval: number,
  start: boolean,
}

type CycleActiveModeType = "pomodoro" | "shortBreak" | "longBreak"


interface IPomodoroCycleContext {
  pomodoroCycle: ICycle,
  activedCycle: CycleActiveModeType,
  percentageTime: number,
  switchMode: (mode: CycleActiveModeType) => void,
  startStopCycle: () => void,
  stopCycle: () => void,
  handleShortBreakEnd: () => void,
  handlePercentageRemaining: (value: number) => void
}
interface IPomodoroCycleProvider {
  children: ReactNode
}

const PomodoroCycleContext = createContext({} as IPomodoroCycleContext)

export function PomodoroCycleProvider({ children }: IPomodoroCycleProvider) {

  const [activedCycle, setActivedCycle] = useState<CycleActiveModeType>("pomodoro")
  const [percentageTime, setPercentageTime] = useState<number>(0)
  const [pomodoroCycle, setPomodoroCycle] = useState<ICycle>({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 3,
    start: true,
  });

  const startStopCycle = useCallback(() => {
    setPomodoroCycle((prevState) => ({ ...prevState, start: !prevState.start }))
  }, [])

  const stopCycle = useCallback(() => {
    setPomodoroCycle((prevState) => ({ ...prevState, start: false }))
  }, [])

  const switchMode = useCallback((mode: CycleActiveModeType) => {
    setActivedCycle(mode)
  }, [])

  const handleShortBreakEnd = useCallback(() => {
    if (pomodoroCycle.longBreakInterval > 0) {
      setPomodoroCycle((prevState) => ({ ...prevState, longBreakInterval: prevState.longBreakInterval - 1 }));
      setActivedCycle("pomodoro");
    } else {
      setActivedCycle("longBreak")
      setPomodoroCycle((prevState) => ({ ...prevState, longBreakInterval: 1 }));
    }
  }, [pomodoroCycle])

  const handlePercentageRemaining = useCallback((value: number) => {
    setPercentageTime(value)
  }, [])

  const value = useMemo(() => {
    return {
      pomodoroCycle,
      activedCycle,
      percentageTime,
      switchMode,
      startStopCycle,
      stopCycle,
      handleShortBreakEnd,
      handlePercentageRemaining,
    }
  }, [
    pomodoroCycle,
    activedCycle,
    percentageTime,
    switchMode,
    startStopCycle,
    stopCycle,
    handleShortBreakEnd,
    handlePercentageRemaining
  ])

  return <PomodoroCycleContext.Provider value={value}>{children}</PomodoroCycleContext.Provider>
}

export function usePomodoroCycles() {
  const context = useContext(PomodoroCycleContext)

  if (!context) {
    throw new Error(
      'usePomodoroCycleContext must be used within an PomodoroPomodoroCycleContextProvider',
    )
  }

  return context
}
