/* eslint-disable prettier/prettier */
import { HandPalm, Play } from "@phosphor-icons/react";

import CountDown from "../../components/CountDown";
import { PomodoroCycleControls } from "../../components/PomodoroTab";
import Tasks from "../../components/Tasks";
import { usePomodoroCycles } from "../../contexts/PomodoroCycleContext";
import {
  ControllPomodoroContainer,
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from "./styles";

export default function Home() {
  const { pomodoroCycle, startCycle, stopCycle } = usePomodoroCycles()

  return (
    <HomeContainer>
      <div>
        <ControllPomodoroContainer>

          <PomodoroCycleControls />
        </ControllPomodoroContainer>
        <CountDown />

        {pomodoroCycle.start ? (
          <StopCountdownButton onClick={stopCycle}>
            <HandPalm />
            Pausar
          </StopCountdownButton>
        ) : (
          <StartCountdownButton onClick={startCycle}>
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
