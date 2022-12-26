import { useState } from 'react'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment ({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/camisbrussi.png" alt="" />
      <div className={styles.commentBox}> 
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
          <strong>Camila Sbrussi</strong>
          <time title="11 de maio ás 11:13" dateTime="2022-05-11 08:00:00">Publicado há 1 hora</time>
          
          </div>
          <button title="Deletar Comentário" onClick={handleDeleteComment} >
            <Trash size={24} />
          </button>
        </header>

        <p>{content}</p>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp /> 
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
      </div>
    </div>
  )

}
