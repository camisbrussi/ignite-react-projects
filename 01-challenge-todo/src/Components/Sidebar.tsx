import { PlusCircle } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}
