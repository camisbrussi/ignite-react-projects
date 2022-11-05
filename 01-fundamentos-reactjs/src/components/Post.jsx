import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    1,
    2,
  ]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr
  })

  const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCrateNewComment() {
    event.preventDefault();

    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.rule}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> Publicado {publishDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          // usar switch
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if(line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea placeholder="Deixe um comentário"/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

        <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>

    </article>
    
  )
}