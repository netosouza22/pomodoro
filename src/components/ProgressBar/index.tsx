import { usePomodoroCycles } from "../../contexts/PomodoroCycleContext";
import { ProgressBarStyled } from "./styles";

export default function ProgressBar() {
  const { percentageTime } = usePomodoroCycles()
  return <ProgressBarStyled value={percentageTime} max={100}></ProgressBarStyled>
}