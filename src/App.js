import React, {useState} from 'react';
import Counter from './components/Counter'
import CommentForm from './components/CommentForm';
import Comments from './components/Comments'

export default function App() {

  const [comments, setComments] = useState(['yes', 'no'])

  const addComment = (comment) => {
    console.log(comment)
    setComments(...comments, comment)
  }

  return (
    <div>
      <Counter />
      <CommentForm addComment={addComment}/>
      <Comments comments={comments}/>
    </div>
  )
}
