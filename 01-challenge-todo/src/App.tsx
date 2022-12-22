import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import './global.css'

import styles from './App.module.css'
import { Task } from './Components/Task'
import { useState } from 'react'

const tasksDefault = [
  {
    description: 'Teste 1',
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

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <header>
            <b>
              Tarefas criadas <span>5</span>
            </b>
            <b>
              Concluídas <span>2 de 5</span>
            </b>
          </header>
          {tasks?.map((task) => {
            return (
              <Task
                key={task.description}
                description={task.description}
                checked={task.check}
                onDelete={removeTask}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
