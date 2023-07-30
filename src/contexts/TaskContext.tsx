import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';


interface ITask {
  id: string,
  name: string,
  isFinished: boolean,
  isFocus: boolean
}

interface ITaskContext {
  tasks: ITask[]
  createTask: (name: string) => void;
  finishTask: (id: string) => void;
}
interface ITaskProvider {
  children: ReactNode
}

const TaskContext = createContext({} as ITaskContext)

export function TaskProvider({ children }: ITaskProvider) {
  const [tasks, setTasks] = useState<ITask[]>([])

  const createTask = useCallback((name: string) => {
    const id = String(new Date().getTime())

    const task: ITask = {
      id,
      name: name,
      isFinished: false,
      isFocus: false
    }
    setTasks(oldTasks => [...oldTasks, task])
  }, [])

  const finishTask = useCallback((id: string) => {
    const updatedTask: ITask[] = tasks.map((task) => {
      if (task.id === id) {
        task.isFinished = !task.isFinished;
      }

      return task;
    })

    setTasks(updatedTask)
  }, [])


  const value = useMemo(() => {
    return {
      tasks,
      createTask,
      finishTask
    }
  }, [
    tasks,
    createTask,
    finishTask
  ])

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTask() {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error(
      'useTaskContext must be used within an TaskCo',
    )
  }

  return context
}
