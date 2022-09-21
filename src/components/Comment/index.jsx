import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar'

import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
   const [likeCount, setLikeCount] = useState(0);

   function handleDeleteComment() {
      onDeleteComment(content);
   };

   function handleLikeCount() {
      setLikeCount(likeCount + 1);
   };

   return(
      <div className={styles.comment}>
         <Avatar 
            hasBorder={false}
            src='https://github.com/pablodixs.png'
         />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorTime}>
                     <strong>Pablo Dias</strong>
                     <time>Cerca de 2h atrás</time>
                  </div>
                  <button 
                     onClick={handleDeleteComment}
                     title='Deletar comentário'
                  >
                     <Trash size={22} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button onClick={handleLikeCount}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
         </div>
      </div>
   )
}