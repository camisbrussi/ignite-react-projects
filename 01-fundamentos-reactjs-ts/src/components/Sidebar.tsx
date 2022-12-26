import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt=""
      />

      <div className={styles.profile}>
         <Avatar src="https://github.com/camisbrussi.png" />

          <strong>Camila Sbrussi</strong>
          <span>Engenheira de Software</span>
      
      </div>

      <footer>
        <a href="#"><PencilLine size={18}/>Editar seu perfil</a>
      </footer>
      </aside>
  )
}