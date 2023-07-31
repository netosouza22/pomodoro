
import { useState } from "react";
import TaskForm from "../TaskForm";
import TasksList from "../TasksList";

import { Minus, Plus } from '@phosphor-icons/react';

import { AddTaskButton, TaskListContainer, TaskListHeader } from "./styles";

export default function Tasks() {

  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <TaskListContainer>
      <TaskListHeader>
        Tarefas
        <AddTaskButton onClick={() => setShowForm(state => !state)}>
          {showForm ? <Minus weight="bold" /> : <Plus weight="bold" />}
        </AddTaskButton>
      </TaskListHeader>

      {
        showForm && <TaskForm />
      }

      <TasksList />

    </TaskListContainer>
  )
}