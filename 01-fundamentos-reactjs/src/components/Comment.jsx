import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/camisbrussi.png"/>
      <div className={styles.commentBox}> 
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
          <strong>Camila Sbrussi</strong>
          <time title="11 de maio ás 11:13" dateTime="2022-05-11 08:00:00">Publicado há 1 hora</time>
          
          </div>
          <button title="Deletar Comentário">
            <Trash size={24} />
          </button>
        </header>

        <p>Muito bom Devon, Parabéns</p>
      </div>

      <footer>
        <button>
          <ThumbsUp /> 
          Aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )

}
