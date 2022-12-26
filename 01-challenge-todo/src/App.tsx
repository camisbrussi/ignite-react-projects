import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import './global.css'

import styles from './App.module.css'
import { Task } from './Components/Task'
import { useState } from 'react'

const tasksDefault = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    check: true,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    check: false,
  },
]

interface TaskProps {
  description: string
  check: boolean
}

export function App() {
  const [tasks, setTask] = useState<TaskProps[]>(tasksDefault)

  // TODO
  // function addTask(description: string) {
  //   setTask( [ {description, check: false} ] )
  // }

  function removeTask(description: string) {
    setTask([])
  }

  function concludeTask(description: string) {}

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <header>
            <b>
              Tarefas criadas <span>{tasksDefault.length}</span>
            </b>
            <b>
              Concluídas
              <span>
                {tasksDefault.filter((task) => task.check).length} de{' '}
                {tasksDefault.length}
              </span>
            </b>
          </header>
          {tasks?.map((task) => {
            return (
              <Task
                key={task.description}
                description={task.description}
                checked={task.check}
                onDelete={removeTask}
                onCheck={concludeTask}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
