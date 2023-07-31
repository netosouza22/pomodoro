/* eslint-disable prettier/prettier */
import { HandPalm, Play } from "@phosphor-icons/react";

import CountDown from "../../components/CountDown";
import { PomodoroCycleControls } from "../../components/PomodoroTab";
import ProgressBar from "../../components/ProgressBar";
import Tasks from "../../components/Tasks";
import { usePomodoroCycles } from "../../contexts/PomodoroCycleContext";
import {
  ControllPomodoroContainer,
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from "./styles";

export default function Home() {
  const { pomodoroCycle, startStopCycle } = usePomodoroCycles()

  return (
    <HomeContainer>
      <div>
        <ControllPomodoroContainer>

          <PomodoroCycleControls />
        </ControllPomodoroContainer>
        <CountDown />

        {pomodoroCycle.start ? (
          <StopCountdownButton onClick={startStopCycle}>
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton onClick={startStopCycle}>
            <Play />
            Começar
          </StartCountdownButton>
        )}
      </div>
      <div>
        <Tasks />
      </div>
    </HomeContainer>
  );
}
