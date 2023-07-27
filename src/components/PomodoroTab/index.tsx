import { usePomodoroCycles } from "../../contexts/PomodoroCycleContext";
import { CycleControlButton, PomodoroCycleControlsContainer } from "./styles";

type SelectButtonType = "pomodoro" | "shortBreak" | "longBreak";

export const PomodoroCycleControls = () => {
  const { activedCycle, stopCycle, switchMode } = usePomodoroCycles()

  const handleButtonSelected = (buttonType: SelectButtonType) => {
    switchMode(buttonType)
    stopCycle();
  }

  return (
    <PomodoroCycleControlsContainer>
      <CycleControlButton isActive={activedCycle === "pomodoro"} onClick={() => handleButtonSelected("pomodoro")}>Pomodoro</CycleControlButton>
      <CycleControlButton isActive={activedCycle === "shortBreak"} onClick={() => handleButtonSelected("shortBreak")}>Short Break</CycleControlButton>
      <CycleControlButton isActive={activedCycle === "longBreak"} onClick={() => handleButtonSelected("longBreak")}>Long Break</CycleControlButton>
    </PomodoroCycleControlsContainer>
  )
}